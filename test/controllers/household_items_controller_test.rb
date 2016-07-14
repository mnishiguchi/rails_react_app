require 'test_helper'

class HouseholdItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @household_item = household_items(:one)
  end

  test "should get index" do
    get household_items_url
    assert_response :success
  end

  test "should get new" do
    get new_household_item_url
    assert_response :success
  end

  test "should create household_item" do
    assert_difference('HouseholdItem.count') do
      post household_items_url, params: { household_item: { description: @household_item.description, name: @household_item.name, quantity: @household_item.quantity, tag: @household_item.tag, volume: @household_item.volume } }
    end

    assert_redirected_to household_item_url(HouseholdItem.last)
  end

  test "should show household_item" do
    get household_item_url(@household_item)
    assert_response :success
  end

  test "should get edit" do
    get edit_household_item_url(@household_item)
    assert_response :success
  end

  test "should update household_item" do
    patch household_item_url(@household_item), params: { household_item: { description: @household_item.description, name: @household_item.name, quantity: @household_item.quantity, tag: @household_item.tag, volume: @household_item.volume } }
    assert_redirected_to household_item_url(@household_item)
  end

  test "should destroy household_item" do
    assert_difference('HouseholdItem.count', -1) do
      delete household_item_url(@household_item)
    end

    assert_redirected_to household_items_url
  end
end
