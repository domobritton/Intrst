@pins.each do |pin|
  pin.set! pin.id do
    json.extract! pin, :id, :comment, :author_id, :board_id, :url
  end
end
