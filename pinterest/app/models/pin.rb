# == Schema Information
#
# Table name: pins
#
#  id         :bigint(8)        not null, primary key
#  comment    :text
#  url        :string
#  author_id  :integer
#  board_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Pin < ApplicationRecord
  validate :ensure_image

  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :board

  has_one_attached :image

  def ensure_image
    unless self.image.attached?
      errors[:image] << 'Image must be attached'
    end
  end
end
