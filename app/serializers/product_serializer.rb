class ProductSerializer < ActiveModel::Serializer
  attributes :id, :product, :price, :description, :category, :picture_url
end
