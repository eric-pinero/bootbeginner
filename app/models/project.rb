# == Schema Information
#
# Table name: projects
#
#  id              :bigint           not null, primary key
#  title           :string
#  subtitle        :string           not null
#  creator_id      :integer          not null
#  category_id     :integer          not null
#  subcategory_id  :integer
#  description     :string
#  risks           :string
#  faqs            :string
#  length          :integer
#  amount_received :integer
#  goal            :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  launched?       :boolean          default(FALSE)
#  location        :string           not null
#

class Project < ApplicationRecord
    validates :subtitle, :location, presence: true, length: { minimum: 1}

    has_many :rewards

    has_many :pledges

    has_one_attached :image
    
    belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

    belongs_to :category

    belongs_to :subcategory, optional: true

    def launch_ready?
        errors.add("cannot launch project until all required fields are complete")
        # need to write a custom validation that checks if all non-optional fields are complete before launch
    end

    def category_name
        category.name
    end

    def project_rewards
        rewards.all
    end

    def project_pledges
        pledges.all
    end

    def creator_name
        creator.username
    end

end
