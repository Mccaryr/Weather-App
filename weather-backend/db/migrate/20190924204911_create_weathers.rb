class CreateWeathers < ActiveRecord::Migration[5.2]
  def change
    create_table :weathers do |t|
      t.integer :location_id
      t.integer :temperature

      t.timestamps
    end
  end
end
