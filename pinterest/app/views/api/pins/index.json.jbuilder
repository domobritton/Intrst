@pins.each do |pin|
  pin.set! pin.id do
    json.extract! pin, :id, :comment, :author_id, :board_id, :url
    if pin.image.attached?
      json.image_url url_for(pin.image)
    end
  end
end
