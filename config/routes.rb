Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json}   do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:index, :create, :show, :edit, :update, :destroy]
    resources :rewards, only: [:create, :show, :edit, :update, :destroy]
    resources :pledges, only: [:create, :show, :edit, :update, :destroy]
    resources :categories, only: [:index]
  end

end
