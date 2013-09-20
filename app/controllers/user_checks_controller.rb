class UserChecksController < ApplicationController



  def search
    name_to_check = params[:q].downcase || ""
    if name_to_check[0] == "@"
      name_to_check = name_to_check[1..-1]
    end

    @user_check = UserCheck.where(name: name_to_check).first_or_create
    if @user_check.score == nil
      @user_check.score = ((0..15).to_a.sample.to_s + "." + (0..9).to_a.sample.to_s).to_f
      @user_check.save
    end
    @user_check.check_count += 1

    respond_to do |format|
      format.html
      format.js {}
    end

  end

end
