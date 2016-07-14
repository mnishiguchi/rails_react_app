Rails.application.routes.draw do

  root "pages#simple"
  get "simple", to: "pages#simple"

  resources :comments
end
