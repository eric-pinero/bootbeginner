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

ActiveRecord::Schema.define(version: 2019_07_01_214421) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pledges", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "project_id", null: false
    t.integer "reward_id"
    t.integer "pledged_amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "project_id"], name: "index_pledges_on_user_id_and_project_id", unique: true
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "subtitle", null: false
    t.integer "creator_id", null: false
    t.integer "category_id", null: false
    t.integer "subcategory_id"
    t.string "description"
    t.string "risks"
    t.string "faqs"
    t.integer "length"
    t.integer "amount_received"
    t.integer "goal"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "launched?", default: false
    t.string "location", null: false
    t.index ["category_id"], name: "index_projects_on_category_id"
    t.index ["creator_id"], name: "index_projects_on_creator_id"
    t.index ["subcategory_id"], name: "index_projects_on_subcategory_id"
  end

  create_table "rewards", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.string "items"
    t.integer "project_id", null: false
    t.integer "minimum_value", null: false
    t.integer "quantity"
    t.datetime "start_time"
    t.datetime "end_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "estimated_month"
    t.integer "estimated_year"
    t.index ["project_id"], name: "index_rewards_on_project_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
