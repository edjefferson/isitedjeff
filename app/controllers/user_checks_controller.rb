class UserChecksController < ApplicationController



  def search
    @user_check = UserCheck.where(name: params[:q]).first_or_create
    if @user_check.score == nil
      @user_check.score = (0..15).to_a.sample
      @user_check.save
    end

    respond_to do |format|
      format.html
      format.js
    end

  end

end
