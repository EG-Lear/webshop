class ProductsController < ApplicationController

  def create
    product = Product.create(product_params)
    if product.valid?
      render json: product, status: :created
    else
      render json: { errors: product.errors.full_messages }
    end
  end

  def index
    products = Product.all
    render json: products
  end

  private

  def product_params
    params.permit(:product, :price, :description, :category, :picture_url)
  end
end
