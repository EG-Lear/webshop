class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :product
      t.integer :price
      t.string :description
      t.string :category
      t.string :picture_url

      t.timestamps
    end
  end
end
