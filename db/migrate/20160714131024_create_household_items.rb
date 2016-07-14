class CreateHouseholdItems < ActiveRecord::Migration[5.0]
  def change
    create_table :household_items do |t|
      t.string :name, null: false
      t.float :volume, default: 0, null: false
      t.integer :quantity, default: 1, null: false
      t.string :tag, null: false
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end
