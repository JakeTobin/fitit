Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]

  get 'current_user', to: 'application#current_user'
  get 'request_token', to: 'tokens#request_token'
  get 'access_token', to: 'tokens#access_token'

  # namespace :api, :path => "", :constraints => {:subdomain => "api"} do
  #   namespace :v1 do
      resources :blabs, only: [:index, :create, :show]
      resources :resistances, only: [:index, :create, :show]
      resources :times, only: [:index, :create, :show]
    # end
  # end

  match '*all', to: 'application#index', via: [:get]
end
