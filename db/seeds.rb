# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#CREATE USERS BEFORE SEEDING!

User.create!({email: "kush@gmail.com",
              name: "Kush Patel",
              password_digest: BCrypt::Password.create("kushkush"),
              session_token: SecureRandom.urlsafe_base64(16)
              })
User.create!({email: "ed@gmail.com",
              name: "Ed Huang",
              password_digest: BCrypt::Password.create("ededed"),
              session_token: SecureRandom.urlsafe_base64(16)
              })
User.create!({email: "robert@gmail.com",
              name: "Robert Yaman",
              password_digest: BCrypt::Password.create("robert"),
              session_token: SecureRandom.urlsafe_base64(16)
              })
User.create!({email: "alan@gmail.com",
              name: "Alan Tran",
              password_digest: BCrypt::Password.create("alanalan"),
              session_token: SecureRandom.urlsafe_base64(16)
              })

Album.create!({title: "Euro-trip",
               url: "http://www.greatbuildings.com/gbc/thumbnails/cid_1123539042_05221v.250.jpg",
               owner_id: "1" })

Album.create!({title: "Food",
               url: "http://ak-static.scoopon.com.au/scpn/deals/main/45000/45813_1.jpg",
               owner_id: "1" })

Album.create!({title: "Around SF",
               url: "http://en-img.hb-assets.com/r231/assets/common/images/destinations/san_francisco.png",
               owner_id: "2" })

Album.create!({title: "My Pets",
               url: "http://puppyparadise.com/images/Breeds/eng01.jpg",
               owner_id: "3" })

Photo.create!({ album_id: 1,
                title: "Eiffel Tower",
                url: "http://www.greatbuildings.com/gbc/thumbnails/cid_1123539042_05221v.250.jpg",
                owner_id: 1,
                description: "After the ride up",
                long: 2.3508,
                lat: 48.8567})

Photo.create!({ album_id: 1,
                title: "London",
                url: "http://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg",
                owner_id: 1,
                description: "At Big Ben",
                long: -0.1275,
                lat: 51.5072})

Photo.create!({ album_id: 1,
                title: "Louvre",
                url: "http://thecultureur.com/wp-content/uploads/2013/03/museo-del-louvre.jpg",
                owner_id: 1,
                description: "Best Museum Ever",
                long: 2.3364,
                lat: 48.8611})

Photo.create!({ album_id: 1,
                title: "Venice",
                url: "http://i.telegraph.co.uk/multimedia/archive/02338/Venice-rialto_2338359b.jpg",
                owner_id: 1,
                description: "<3 the gondolas",
                long: 12.3358,
                lat: 45.4375})

Photo.create!({ album_id: 3,
                title: "Golden Gate Bridge",
                url: "http://www.history.com/news/wp-content/uploads/2012/05/golden-gate-wide.jpg",
                owner_id: 2,
                description: "I think they repainted it",
                long: -122.4786,
                lat: 37.8197})

Photo.create!({ album_id: 3,
                title: "The Pier",
                url: "http://buildingphotos.com/sanfrancisco/pics/pier39.jpg",
                owner_id: 2,
                description: "So many people here",
                long: -122.4104,
                lat: 37.8100})

Photo.create!({ album_id: 3,
                title: "Financial District",
                url: "http://media-cdn.tripadvisor.com/media/photo-s/01/66/95/a0/financial-district-taken.jpg",
                owner_id: 2,
                description: "At Big Ben",
                long: -122.4029,
                lat: 37.7952})

Photo.create!({ album_id: 4,
                title: "Husky",
                url: "http://i.dailymail.co.uk/i/pix/2014/09/03/1409738988707_Image_galleryImage_Dated_03_09_2014_HUSKIES_.JPG",
                owner_id: 1,
                description: "I want one!",
                long: -73.9667,
                lat: 40.7833})

Photo.create!({ album_id: 4,
                title: "Kitten",
                url: "http://www.eastcottvets.co.uk/uploads/Animals/gingerkitten.jpg",
                owner_id: 1,
                description: "Diana's Cat!",
                long: -118.3781,
                lat: 34.1722})

Comment.create!({user_id: 1, photo_id: 2, body: "I want to go to Paris!"})
Comment.create!({user_id: 2, photo_id: 2, body: "I love Paris!"})
Comment.create!({user_id: 1, photo_id: 2, body: "Have you even been there?"})
Comment.create!({user_id: 2, photo_id: 2, body: "no :("})
