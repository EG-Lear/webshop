class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :product_name
      t.intger :cost
      t.string :description
      t.string :type

      t.timestamps
    end
  end
end
