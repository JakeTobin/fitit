class Reps < ActiveRecord::Base
  belongs_to :user
  validates_presence_of :reps , :weight
end
