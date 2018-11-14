json.pin do
  json.extract! pin, :id, :url, :comment, :author_id
  json.board_id pin.board.id
  json.extract! pin.user, :username

  if pin.image.attached?
    json.image_url url_for(pin.image)
  end
end
