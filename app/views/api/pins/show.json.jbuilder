json.extract! @pin, :id, :comment, :author_id, :board_id, :url

json.author_username @pin.user.username
json.author_image @pin.user.image_url
json.board_id @pin.board.id

if @pin.image.attached?
  json.image_url url_for(@pin.image)
end
