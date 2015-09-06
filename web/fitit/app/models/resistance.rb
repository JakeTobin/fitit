class Resistance < ActiveRecord::Base
  validates_presence_of :rep , :weight
end
