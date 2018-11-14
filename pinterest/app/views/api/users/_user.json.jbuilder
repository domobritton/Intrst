json.extract! user, :id, :username, :email, :firstname, :lastname, :image_url

json.boards do
  user.boards.each do |board|
    json.set! board.id do
      json.extract! board, :id, :title
    end
  end
end


json.pins do
  user.pins.each do |pin|
    json.set! pin.id do
      json.extract! pin, :id, :comment ,:board_id

      json.board_id pin.board.id

      if pin.image.attached?
        json.image_url url_for(pin.image)
      end
    end
  end
end
