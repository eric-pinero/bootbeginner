# == Schema Information
#
# Table name: rewards
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  description     :text             not null
#  items           :string
#  project_id      :integer          not null
#  minimum_value   :integer          not null
#  quantity        :integer
#  start_time      :datetime
#  end_time        :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  estimated_month :string
#  estimated_year  :integer
#

class Reward < ApplicationRecord
    validates :title, :description, :minimum_value, :estimated_month, :estimated_year, presence: true
    
    belongs_to :project
end
