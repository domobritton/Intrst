json.extract! board, :id, :title
json.author_id board.user.id
json.author_username board.user.username

json.pins do
  board.pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin', pin: pin
    end
  end
end

json.author do
  json.extract! board.user, :id, :username
  json.image_url asset_path(board.user.image_url)
end
