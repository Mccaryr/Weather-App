class WeatherSerializer < ActiveModel::Serializer
  attributes :id, :temperature, :location_id 
end
