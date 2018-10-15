@boards.each do |board|
  json.boards do
    json.set! board.id do
      json.extract! board, :id, :title
      json.author_id board.author_id
      json.author_username board.author_id.username
    end
  end
end

@boards.each do |board|
  json.pins do
    board.pins.each do |pin|
      json.set! pin.id do
        json.partial! 'api/pins/pin', pin: pin
      end
    end
  end
end
