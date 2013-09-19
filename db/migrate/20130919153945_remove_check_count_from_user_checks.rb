class RemoveCheckCountFromUserChecks < ActiveRecord::Migration
  def change
    remove_column :user_checks, :check, :string
    remove_column :user_checks, :count, :integer
  end
end
