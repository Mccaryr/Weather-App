Rails.application.routes.draw do

  namespace :api do 
    namespace :v1 do 
      resources :weathers do 
        resources :locations
      end 
    end 
  end 
end
