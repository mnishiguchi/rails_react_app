Rails.application.routes.draw do

  root "pages#simple"
  get "simple",          to: "pages#simple"
  get "estimate_moving", to: "pages#estimate_moving"

  resources :comments
  resources :household_items
end
