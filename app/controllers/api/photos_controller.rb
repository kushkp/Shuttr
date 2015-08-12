class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)

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
    if (current_user.id == @photo.owner.id)
      render :show
    else
      flash[:errors] = ["Invalid Photo"]
      render :index
    end
  end

  def index
    # TODO: Select for 1) photos belonging to user 2) photos in album
    @photos = Photo.all
    render :index
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy!
    render :index
  end

  def explore
    @photos = Photo.all
    render :index
  end

private
  def photo_params
    params.require(:photo).permit(:title, :url, :long, :lat, :album_id)
  end
end
