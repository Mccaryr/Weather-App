Rails.application.routes.draw do

  namespace :api do 
    namespace :v1 do 
      resources :weathers
      resources :locations
    end 
  end 
end
