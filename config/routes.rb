Rails.application.routes.draw do

  root "pages#estimate_moving"
  get "estimate_moving", to: "pages#estimate_moving"

  resources :household_items
end
