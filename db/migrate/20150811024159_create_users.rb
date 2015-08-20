class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :alias
      t.string :avatar_url
      t.timestamps null: false
    end

    add_index :users, :email, unique: true
    add_index :users, :alias, unique: true
  end
end
