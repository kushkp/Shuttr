# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#CREATE USERS BEFORE SEEDING!

# Album.create!({ title: "Euro-trip",
#                url: "http://www.greatbuildings.com/gbc/thumbnails/cid_1123539042_05221v.250.jpg",
#                owner_id: "1" })
#
# Album.create!({ title: "Around SF",
#                url: "http://en-img.hb-assets.com/r231/assets/common/images/destinations/san_francisco.png",
#                owner_id: "1" })
#
# Album.create!({ title: "My Pets",
#                url: "http://puppyparadise.com/images/Breeds/eng01.jpg",
#                owner_id: "1" })

Photo.create!({ album_id: 4,
                title: "Eiffel Tower",
                url: "http://www.greatbuildings.com/gbc/thumbnails/cid_1123539042_05221v.250.jpg" })

Photo.create!({ album_id: 4,
                title: "London",
                url: "http://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg" })

Photo.create!({ album_id: 4,
                title: "Louvre",
                url: "http://thecultureur.com/wp-content/uploads/2013/03/museo-del-louvre.jpg" })

Photo.create!({ album_id: 4,
                title: "Venice",
                url: "http://i.telegraph.co.uk/multimedia/archive/02338/Venice-rialto_2338359b.jpg" })

Photo.create!({ album_id: 5,
                title: "Golden Gate Bridge",
                url: "http://www.history.com/news/wp-content/uploads/2012/05/golden-gate-wide.jpg" })

Photo.create!({ album_id: 5,
                title: "The Pier",
                url: "http://buildingphotos.com/sanfrancisco/pics/pier39.jpg" })

Photo.create!({ album_id: 5,
                title: "Financial District",
                url: "http://media-cdn.tripadvisor.com/media/photo-s/01/66/95/a0/financial-district-taken.jpg" })

Photo.create!({ album_id: 6,
                title: "Husky",
                url: "http://i.dailymail.co.uk/i/pix/2014/09/03/1409738988707_Image_galleryImage_Dated_03_09_2014_HUSKIES_.JPG" })

Photo.create!({ album_id: 6,
                title: "Kitten",
                url: "http://www.eastcottvets.co.uk/uploads/Animals/gingerkitten.jpg" })
