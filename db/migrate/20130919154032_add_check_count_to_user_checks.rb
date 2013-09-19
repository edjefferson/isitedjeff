class AddCheckCountToUserChecks < ActiveRecord::Migration
  def change
    add_column :user_checks, :check_count, :integer
  end
end
