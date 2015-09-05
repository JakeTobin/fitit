class CreateReps < ActiveRecord::Migration
  def change
    create_table :reps do |t|
      t.belongs_to :user, index: true
      t.string :reps, null: false
      t.string :weight, null: false
      t.timestamps
    end
  end
end
