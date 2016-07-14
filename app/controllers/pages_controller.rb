class PagesController < ApplicationController
  before_action :set_comments

  # Simple React example.
  def simple
  end

  def estimate_moving
  end

  private

    def set_comments
      @comments = Comment.all.order("id DESC")
    end

    def set_household_items
      @household_items = HouseholdItem.all.order("id DESC")
    end
end
