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

require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
