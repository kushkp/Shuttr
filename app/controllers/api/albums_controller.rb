class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id

    if @album.save!
      render :show
    else
      render @album.errors.full_messages
    end
  end

  def update
    @album = Album.find(params[:id])

    if @album.update_attributes(album_params)
      render :show
    else
      render @album.errors.full_messages
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  def index
    @albums = Album.all
    render :index
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy!
    render :index
  end

private
  def album_params
    params.require(:album).permit(:title, :url)
  end


end
