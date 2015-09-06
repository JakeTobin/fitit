class CreateResistance < ActiveRecord::Migration
  def change
    create_table :resistances do |t|
      t.string :rep, null: true
      t.string :weight, null:true
      t.timestamps null: false
    end
  end
end
