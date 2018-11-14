class ChangePins < ActiveRecord::Migration[5.2]
  def change
    remove_index :pins, :author_id
    remove_index :pins, :board_id

    add_index :pins, :author_id
    add_index :pins, :board_id
  end
end
