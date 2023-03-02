class ProductsController < ApplicationController

  def create
    product = Product.create(product_params)
    if product.valid?
      render json: product, status: :created
    else
      render json: { errors: product.errors.full_messages }
    end
  end

  private

  def product_params
    params.permit(:product, :cost, :description, :category, picture_url)
  end
end
