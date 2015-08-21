Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :destroy, :new]

  namespace :api, defaults: { format: :json } do
    resources :albums, only: [:index, :create, :destroy, :update, :show]
    resources :photos, only: [:index, :create, :destroy, :update, :show]
    resources :comments, only: [:index, :create, :destroy, :show]
    resources :albumings, only: [:index, :create, :destroy]
  end
end
