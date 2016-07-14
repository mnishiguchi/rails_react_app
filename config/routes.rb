Rails.application.routes.draw do

  root "pages#react"
  get "react", to: "pages#react"
  get "about", to: "pages#about"

  resources :household_items
end
