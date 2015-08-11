# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Album.create!({title: "Euro-trip",
               url: "http://www.greatbuildings.com/gbc/thumbnails/cid_1123539042_05221v.250.jpg",
               owner_id: "1"})

Album.create!({title: "Around SF",
               url: "http://en-img.hb-assets.com/r231/assets/common/images/destinations/san_francisco.png",
               owner_id: "1"})

Album.create!({title: "My Pets",
               url: "http://puppyparadise.com/images/Breeds/eng01.jpg",
               owner_id: "1"})
