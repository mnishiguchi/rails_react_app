Rails.application.routes.draw do

  root "pages#react"

  get "react",         to: "pages#react"
  get "rails_default", to: "pages#rails_default"
  get "rails_ajax",    to: "pages#rails_ajax"
  
  get "about",         to: "pages#about"

  resources :household_items, except: :new
end
