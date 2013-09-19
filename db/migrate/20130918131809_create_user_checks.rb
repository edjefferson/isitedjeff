class CreateUserChecks < ActiveRecord::Migration
  def change
    create_table :user_checks do |t|
      t.string :name
      t.string :profile_url
      t.integer :score

      t.timestamps
    end
  end
end
