class StaticPagesController < ApplicationController
  before_action :require_login

  def root
    if logged_in?
      render :root
    else
      redirect_to new_session_url
    end
  end
end
