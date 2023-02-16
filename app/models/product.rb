class Product < ApplicationRecord
  validates :username, presence: true, uniqueness: true
end
