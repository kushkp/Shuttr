class Api::AlbumingsController < ApplicationController
  def create
    @albuming = Albuming.new(albuming_params)

    if @albuming.save!
      render json: @albuming
    else
      render @albuming.errors.full_messages
    end
  end

  def index
    @albums = Albuming.all.where(user_id: current_user.id)
    render :index
  end

  def destroy
    @albuming = Albuming.find(params[:id])
    @albuming.destroy!
    render json: @albuming
  end

private
  def albuming_params
    params.require(:albuming).permit(:photo_id, :album_id)
  end
end
