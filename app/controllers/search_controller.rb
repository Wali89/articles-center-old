class SearchController < ApplicationController
  require 'pry'
  def last_ten
    @searches = Search.all
    
    render json: @searches
  end

  def update
    search = Search.find_by(id: params[:id])
    search.likes += 1
    search.save
    render json: search, status: 201
  end

end