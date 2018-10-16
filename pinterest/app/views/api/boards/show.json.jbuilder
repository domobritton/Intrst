json.board do
  json.set! @board.id do
    json.extract! @board, :id, :title
    json.author_id @board.author_id
  end
end


json.pins do
  @board.pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin', pin: pin
    end
  end
end
