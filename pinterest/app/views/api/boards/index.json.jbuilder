@boards.each do |board|
  board.set! board.id do
    json.extract! board, :id, :title, :author_id
  end
end
