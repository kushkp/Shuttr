class SessionsController < ApplicationController
  def create
      @user = User.find_by_credentials(
                  params[:user][:email],
                  params[:user][:password])

      if @user.nil?
        flash[:errors] = ["Invalid login credentials"]
        redirect_to new_session_url
      else
        login(@user)
        redirect_to "/#feed"
      end
    end

    def new
      @user = User.new
    end

    def destroy
      logout
      render json: current_user, status: 200
    end
end
