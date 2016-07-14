class PagesController < ApplicationController
  before_action :set_household_items

  def estimate_moving
  end

  private

    def set_household_items
      @household_items = HouseholdItem.all.order("id DESC")
    end
end
