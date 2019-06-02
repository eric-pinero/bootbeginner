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
    validates :amount_received, numericality: { minimum: 0}, presence: true
    validates :goal, numericality: { minimum: 1 }, presence: true

    def launch_ready?
        errors.add("cannot launch project until all required fields are complete") unless
        # need to write a custom validation that checks if all non-optional fields are complete before launch
    end
    
    belongs_to :creator,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: :User

    belongs_to :category

    belongs_to :subcategory

end
