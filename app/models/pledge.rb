# == Schema Information
#
# Table name: pledges
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  project_id     :integer          not null
#  reward_id      :integer
#  pledged_amount :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Pledge < ApplicationRecord
    validates :pledged_amount, presence: true

    belongs_to: :user
    belongs_to: :project
    belongs_to: :pledge, optional: true
end
