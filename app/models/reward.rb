# == Schema Information
#
# Table name: rewards
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  description   :text             not null
#  items         :string
#  project_id    :integer          not null
#  minimum_value :integer          not null
#  quantity      :integer
#  start_time    :datetime
#  end_time      :datetime
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Reward < ApplicationRecord
    validates :title, :description, :minimum_value, presence: true
    
    belongs_to :project
end
