class User < ActiveRecord::Base
  has_many :blabs
  has_many :times, reps
  validates_presence_of :uid, :handle
end