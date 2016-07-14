# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
HouseholdItem.create!([
  {
   name:  "computer desk ", volume: 20, quantity: 1, description:  " ", tag: "my room", created_at:  "2016-07-11 13:31:36 ", updated_at:  "2016-07-11 13:31:36 " ,
  },
  {
    name:  "sofa  3 seater ", volume: 60, quantity: 1, description:  " ", tag: "my room", created_at:  "2016-07-11 13:31:02 ", updated_at:  "2016-07-11 13:31:02 " ,
  },
  {
     name:  "file 5 drawer ", volume: 1024, quantity: 1, description:  "Libero et vel adipisci eveniet quia incidunt totam... ", tag: "my room", created_at:  "2016-07-11 13:18:19 ", updated_at:  "2016-07-11 13:18:19 " ,
  },
  {
     name:  "file 5 drawer ", volume: 1024, quantity: 1, description:  "Libero et vel adipisci eveniet quia incidunt totam... ", tag: "my room", created_at:  "2016-07-11 13:18:19 ", updated_at:  "2016-07-11 13:18:19 " ,
  },
  {
      name:  "computer desk ", volume: 706, quantity: 2, description:  "Accusantium quam ea dolorem eius. ", tag: "my room", created_at:  "2016-07-11 13:18:19 ", updated_at:  "2016-07-11 13:18:19 "
  },
  {
     name:  "file 5 drawer ", volume: 1024, quantity: 1, description:  "Libero et vel adipisci eveniet quia incidunt totam... ", tag: "my room", created_at:  "2016-07-11 13:18:19 ", updated_at:  "2016-07-11 13:18:19 "
  }
])
