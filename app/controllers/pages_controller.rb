class PagesController < ApplicationController
  before_action :set_comments

  # React/Redux/Router.
  def index
    # NOTE: We use Jbuilder to set the value of the props in the view.
  end

  # React/Redux.
  def no_router
  end

  # Simple React.
  def simple
  end

  private

    def set_comments
      @comments = Comment.all.order("id DESC")
    end
end
