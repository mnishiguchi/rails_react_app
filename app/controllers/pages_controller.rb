class PagesController < ApplicationController
  before_action :set_household_items

  def react
  end

  def rails_default
    @household_item = HouseholdItem.new
    store_location
  end

  def rails_ajax
    @household_item = HouseholdItem.new
    store_location
  end

  def about
  end

  private

    def set_household_items
      @household_items = HouseholdItem.all.order("id DESC")
    end
end
