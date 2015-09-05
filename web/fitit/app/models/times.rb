class Times < ActiveRecord::Base
  belongs_to :user
  validates_presence_of :time
end
