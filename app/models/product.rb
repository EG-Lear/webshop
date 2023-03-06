class Product < ApplicationRecord
  validates :product, presence: true, uniqueness: true
  validates :price, presence: true
  validates :description, presence: true
  validates :category, presence: true
  validates :picture_url, presence: true
end
