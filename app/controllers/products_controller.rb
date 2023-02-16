class ProductsController < ApplicationController

  private

  def product_params
    params.permit(:product_name, :cost, :description, :type)
  end
end
