json.array!(@household_items) do |household_item|
  json.extract! household_item, :id, :name, :volume, :quantity, :tag, :description
  json.url household_item_url(household_item, format: :json)
end
