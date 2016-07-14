Rails.application.routes.draw do

  root "pages#react"
  get "react", to: "pages#react"

  resources :household_items
end
