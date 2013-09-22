class AddScoreToUserChecks < ActiveRecord::Migration
  def change
    add_column :user_checks, :score, :decimal
  end
end
