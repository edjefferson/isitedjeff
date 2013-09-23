class UserChecksController < ApplicationController

  helper_method :sort_column, :sort_direction

  def index
    @user_checks = UserCheck.order(sort_column + " " + sort_direction)
  end



  def robots                                                                                                                                      
    robots = File.read(Rails.root + "config/robots.#{Rails.env}.txt")
    render :text => robots, :layout => false, :content_type => "text/plain"
  end

  def search
    if params[:q]
      name_to_check = params[:q]
      if name_to_check[0] == "@"
        name_to_check = name_to_check[1..-1]
      end

      @user_check = UserCheck.where(name: name_to_check.downcase).first_or_create
      if @user_check.score == nil
        @user_check.score = ((0..159).to_a.sample)/10
        
      end
      @user_check.check_count += 1
      @user_check.save

      respond_to do |format|
        format.html
        format.js {}
      end
    else 
      @user_check = UserCheck.new
      @user_check.name = ""
    end

  end

  private

  def sort_column
    UserCheck.column_names.include?(params[:sort]) ? params[:sort] : "name"
  end
  
  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
  end

end
