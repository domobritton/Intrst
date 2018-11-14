class ChangeBoards < ActiveRecord::Migration[5.2]
  def change

    remove_index :boards, :author_id
    add_index :boards, :author_id 
  end
end
