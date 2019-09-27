class LocationSerializer < ActiveModel::Serializer
  attributes :id, :city, :country 
  has_many :weathers 
end
