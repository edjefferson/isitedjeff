class UserChecksController < ApplicationController

  def index
    @user_checks = UserCheck.all
  end

  def robots                                                                                                                                      
    robots = File.read(Rails.root + "config/robots.#{Rails.env}.txt")
    render :text => robots, :layout => false, :content_type => "text/plain"
  end
  
  def search
    name_to_check = params[:q] || ""
    if name_to_check[0] == "@"
      name_to_check = name_to_check[1..-1]
    end

    @user_check = UserCheck.where(name: name_to_check.downcase).first_or_create
    if @user_check.score == nil
      @user_check.score = ((0..15).to_a.sample.to_s + "." + (0..9).to_a.sample.to_s).to_f
      
    end
    @user_check.check_count += 1
    @user_check.save

    respond_to do |format|
      format.html
      format.js {}
    end

  end

end
