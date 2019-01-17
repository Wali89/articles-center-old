class SearchController < ApplicationController
  require 'pry'
  def last_ten
    @searches = Search.all
    
    render json: @searches
  end

end