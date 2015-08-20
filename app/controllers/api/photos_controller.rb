class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.owner_id = current_user.id

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
    # TODO: is there a way to delegate this? @photo.owner_id
    # if (current_user.id == @photo.owner.id)
      render :show
    # else
    #   flash[:errors] = ["Invalid Photo"]
    #   render :index
    # end
  end

  def index
    if (params["owner_id"])
      @photos = Photo.all.where(owner_id: params["owner_id"]).includes(:comments).order(created_at: :desc)
    elsif (params["filter_data"])
      @photos = filter_photos_by_loc(filter_loc_options).order(created_at: :desc)
    elsif (params["search_data"])
      @photos = filter_photos_by_keyword(params["search_data"])
    else
      @photos = Photo.all.includes(comments: :user).order(created_at: :desc)
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
    a = Photo.joins('INNER JOIN "users" ON "photos"."owner_id" = "users"."id"').where(<<-SQL, kw, kw, kw)
        photos.title LIKE ? OR
        photos.description LIKE ? OR
        users.name LIKE ?
      SQL
  end

  def photo_params
    params.require(:photo).permit(
      :title, :url, :long, :lat, :album_id, :description, :owner_id
    )
    # TODO: ^remove owner_id?
  end
end
