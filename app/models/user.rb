# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#

class User < ApplicationRecord
    validates :session_token, :email, presence: true, uniqueness: true
    validates :username, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password

    has_many :projects,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :Project

    has_many :pledges

    def user_projects
        projects.all
    end

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)

        if @user && @user.is_password?(password)
            @user
        else
            nil
        end
    end

    def is_password?(password)
        b_pwd = BCrypt::Password.new(self.password_digest)
        b_pwd.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save
        session_token
    end

    private
    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

end
  
