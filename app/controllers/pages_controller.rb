class PagesController < ApplicationController
  before_action :set_comments

  # Simple React.
  def simple
  end

  private

    def set_comments
      @comments = Comment.all.order("id DESC")
    end
end
