@pins.each do |pin|
  json.set! pin.id do
    json.extract! pin, :id, :comment, :author_id, :board_id, :url

    json.board_id pin.board.id
    
    if pin.image.attached?
      json.image_url url_for(pin.image)
    end
  end
end
