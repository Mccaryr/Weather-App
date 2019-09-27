class Api::V1::WeathersController < ApplicationController
    before_action :set_location

    def index 
        if @location 
            @weathers = @location.weathers
        else 
            @locations = Location.all 
        end  
        render json: @weathers
    end 

    def create 
        @weather = @location.weathers.build(weather_params)
        if @weather.save 
            render json: @weather
        else 
            render json: {error: 'No Weather Data'}
        end  
    end 

    def show 
        @weather = @location.weathers.find_by(id: params[:id])
        render json: @weather
    end 

    def destroy 
    end 

    private 

    def weather_params
        params.require(:weather).permit(:temperature, :location_id)
    end 

    def set_location
        @location = Location.find(params[:location_id])
    end 
end


