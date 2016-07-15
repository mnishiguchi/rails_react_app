# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# HouseholdItem.create!([
#
# ])

HouseholdItem.destroy_all

# Obtain data.
items      = YAML.load_file("#{Rails.root}/db/household_items.yml")
item_names = items.keys
tag_names  = ["kitchen", "living room", "bed room", "bathroom", "closet"]

30.times do
  name        = item_names.sample
  volume      = items[name]
  quantity    = [1,2,3,4].sample
  tag         = tag_names.sample
  description = ""
  HouseholdItem.create!(name: name, volume: volume, quantity: quantity,
                        tag: tag, description: description)
end
