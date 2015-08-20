# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150820172155) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albumings", force: :cascade do |t|
    t.integer  "album_id",   null: false
    t.integer  "photo_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "albumings", ["album_id"], name: "index_albumings_on_album_id", using: :btree
  add_index "albumings", ["photo_id"], name: "index_albumings_on_photo_id", using: :btree

  create_table "albums", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "user_id",    null: false
    t.string   "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "albums", ["title", "user_id"], name: "index_albums_on_title_and_user_id", unique: true, using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "photo_id",   null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["photo_id"], name: "index_comments_on_photo_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "photos", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "url",         null: false
    t.integer  "user_id",     null: false
    t.text     "description"
    t.float    "long"
    t.float    "lat"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "photos", ["title", "user_id"], name: "index_photos_on_title_and_user_id", unique: true, using: :btree
  add_index "photos", ["title"], name: "index_photos_on_title", using: :btree
  add_index "photos", ["user_id"], name: "index_photos_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "alias"
    t.string   "avatar_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["alias"], name: "index_users_on_alias", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

  add_foreign_key "albumings", "albums"
  add_foreign_key "albumings", "photos"
  add_foreign_key "albums", "users"
  add_foreign_key "comments", "photos"
  add_foreign_key "comments", "users"
  add_foreign_key "photos", "users"
end
