# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160714131024) do

  create_table "comments", force: :cascade do |t|
    t.string   "author",     default: "", null: false
    t.text     "text",       default: "", null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "household_items", force: :cascade do |t|
    t.string   "name",                      null: false
    t.float    "volume",      default: 0.0, null: false
    t.integer  "quantity",    default: 1,   null: false
    t.string   "tag",                       null: false
    t.text     "description",               null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

end
