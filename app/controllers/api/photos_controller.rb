class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save!
      render :show
    else
      render @photo.errors.full_messages
    end
  end

  def update
    @photo = Photo.find(params[:id])

    if @photo.update_attributes(photo_params)
      render :show
    else
      render @photo.errors.full_messages
    end
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def index
    if (params["user_id"]) #my photos
      @photos = Photo.all.where(user_id: params["user_id"]).includes(:comments).order(created_at: :desc).page(params[:page]).per(50)
    elsif (params["filter_data"]) #map search
      @photos = filter_photos_by_loc(filter_loc_options).page(params[:page]).per(100)
    elsif (params["search_data"]) #navbar search
      @photos = filter_photos_by_keyword(params["search_data"]).page(params[:page]).per(100)
    elsif (params["heatmap"])
      @photos = Photo.all.includes(comments: :user).page(params[:page]).per(120)
    else #explore
      @photos = Photo.all.includes(comments: :user).page(params[:page]).per(9)
    end

    render :index
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy!
    render :show
  end

private
  def filter_loc_options
    options = params[:filter_data] || []
    defaults = {
      "lat" => [37.67767358309138, 37.8887756788066],
      "long" => [-122.56501542968749, -122.26838457031249]
    }

    defaults.merge(options)
  end

  def filter_photos_by_loc(filter_data)
    binds = {
      lat_min: filter_data["lat"][0],
      lat_max: filter_data["lat"][1],
      long_min: filter_data["long"][0],
      long_max: filter_data["long"][1]
    }

    # comment logic here(if cond. logic)
    if binds[:long_min].to_f > binds[:long_max].to_f
      Photo.where(<<-SQL, binds)
        photos.long BETWEEN :long_min AND 180
        OR photos.long BETWEEN -180 AND :long_max
      SQL
    else
      Photo.where(<<-SQL, binds)
        photos.lat BETWEEN :lat_min AND :lat_max
        AND photos.long BETWEEN :long_min AND :long_max
      SQL
    end
  end

  def filter_photos_by_keyword(keyword)
    kw = "%" + keyword + "%"
    a = Photo.joins('INNER JOIN "users" ON "photos"."user_id" = "users"."id"').where(<<-SQL, kw, kw, kw)
        photos.title LIKE ? OR
        photos.description LIKE ? OR
        users.alias LIKE ?
      SQL
  end

  def photo_params
    params.require(:photo).permit(
      :title, :url, :long, :lat, :album_id, :description, :user_id
    )
  end
end
