# == Schema Information
#
# Table name: projects
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  subtitle        :string           not null
#  creator_id      :integer          not null
#  category_id     :integer          not null
#  subcategory_id  :integer          not null
#  description     :text             not null
#  risks           :text             not null
#  faqs            :text             not null
#  length          :integer          not null
#  amount_received :integer          not null
#  goal            :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Project < ApplicationRecord
    validates :title, :subtitle, :description, :risks, :faqs, :length, :amount_received, :goal

    belongs_to :creator,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: :User

    belongs_to :category

    belongs_to :subcategory

end
