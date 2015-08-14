class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.owner_id = current_user.id;

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
      @photos = Photo.all.where(owner_id: params["owner_id"])
    else
      @photos = Photo.all
    end

    render :index
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy!
    render :show
  end

private
  def photo_params
    params.require(:photo).permit(
      :title, :url, :long, :lat, :album_id, :description
    )
  end
end
