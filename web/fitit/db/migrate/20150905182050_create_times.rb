class CreateTimes < ActiveRecord::Migration
  def change
    create_table :times do |t|
      t.belongs_to :user, index: true
      t.string :time, null: false
    end
  end
end
