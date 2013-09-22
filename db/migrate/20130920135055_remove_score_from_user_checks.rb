class RemoveScoreFromUserChecks < ActiveRecord::Migration
  def change
    remove_column :user_checks, :score, :string
  end
end
