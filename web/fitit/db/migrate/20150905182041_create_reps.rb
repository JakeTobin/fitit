class CreateReps < ActiveRecord::Migration
  def change
    create_table :repBased do |t|
      t.belongs_to :user, index: true
      t.string :reps, null: true
      t.string :weight, null: true
      t.timestamps
    end
  end
end


# Blab.create([{content: 'this is a blab'}, {content: 'and another blab'}])
