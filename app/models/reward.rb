# == Schema Information
#
# Table name: rewards
#
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Reward < ApplicationRecord
    validates :title, :description, :minimum_value, presence: true
    
    belongs_to :project
end
