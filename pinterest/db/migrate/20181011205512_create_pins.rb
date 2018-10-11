class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.text :comment
      t.string :url
      t.integer :author_id
      t.integer :board_id

      t.timestamps
    end
    add_index :pins, :author_id, unique: true
    add_index :pins, :board_id, unique: true 
  end
end
