User.create!({email: "kush@gmail.com",
              alias: "Kush",
              password_digest: BCrypt::Password.create("kushkush"),
              session_token: SecureRandom.urlsafe_base64(16),
              avatar_url: "http://res.cloudinary.com/dydhzgrty/image/upload/c_scale,w_50/v1440092203/blank-avatar_r9sqmu.png"
              })

User.create!({email: "diana@gmail.com",
              alias: "Diana",
              password_digest: BCrypt::Password.create("dianadinh"),
              session_token: SecureRandom.urlsafe_base64(16),
              avatar_url: "http://res.cloudinary.com/dydhzgrty/image/upload/c_scale,w_50/v1440092203/blank-avatar_r9sqmu.png"
              })

User.create!({email: "Waldo@gmail.com",
              alias: "Waldo",
              password_digest: BCrypt::Password.create("wherewaldo"),
              session_token: SecureRandom.urlsafe_base64(16),
              avatar_url: "http://res.cloudinary.com/dydhzgrty/image/upload/c_scale,w_50/v1440092203/blank-avatar_r9sqmu.png"
              })

User.create!({email: "carmen@gmail.com",
              alias: "Carmen San Diego",
              password_digest: BCrypt::Password.create("carmensd"),
              session_token: SecureRandom.urlsafe_base64(16),
              avatar_url: "http://res.cloudinary.com/dydhzgrty/image/upload/c_scale,w_50/v1440092203/blank-avatar_r9sqmu.png"
              })
User.create!({email: "indiana@gmail.com",
              alias: "Indiana Jones",
              password_digest: BCrypt::Password.create("indiana"),
              session_token: SecureRandom.urlsafe_base64(16),
              avatar_url: "http://res.cloudinary.com/dydhzgrty/image/upload/c_scale,w_50/v1440092203/blank-avatar_r9sqmu.png"
              })

User.create!({email: "guest_user@gmail.com",
              alias: "Guest User",
              password_digest: BCrypt::Password.create("example"),
              session_token: SecureRandom.urlsafe_base64(16),
              avatar_url: "http://res.cloudinary.com/dydhzgrty/image/upload/c_scale,w_50/v1440092203/blank-avatar_r9sqmu.png"
              })


Photo.create!({
  title: 'Eiffel Tower',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/c_scale,h_839/v1440382752/Shuttr/wallpaper_fromparis_eiffel_tower_1280.jpg',
  lat: 48.8567,
  long: 2.3508,
  user_id: 6
});

Photo.create!({
  title: 'Statue of Liberty',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440382495/Shuttr/statue-of-liberty-cartoon-1254460376.jpg',
  lat: 40.6892,
  long: -74.0444,
  user_id: 2
});

Photo.create!({
  title: 'Egyptian Pyramids',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440382505/Shuttr/Pyramids-in-egypt.jpg',
  lat: 29.9761,
  long: 31.1311,
  user_id: 3
});

Photo.create!({
  title: 'Charles River, Boston',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440382508/Shuttr/charles-river-main.jpg',
  lat: 42.3341,
  long: -71.0833,
  user_id: 4
});

Photo.create!({
  title: 'Pont du Gard, France',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440382551/Shuttr/PONT_DU_GARD.jpg',
  lat: 43.9473,
  long: 4.5355,
  user_id: 6
});

Photo.create!({
  title: 'Grand Canyon',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440382527/Shuttr/The-Beautiful-Grand-Canyon-by-Michael-Matti-1024x682.jpg',
  lat: 36.1,
  long: -112.1,
  user_id: 1
});

Photo.create!({
  title: 'Golden Gate Bridge',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440382562/Shuttr/golden_20gate_20bridge.jpg',
  lat: 37.8197,
  long: -122.4786,
  user_id: 6
});

Photo.create!({
  title: 'UCLA',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440382567/Shuttr/tumblr_mvhqju6kLX1r7dlxpo7_1280.jpg',
  lat: 34.0722,
  long: -118.4441,
  user_id: 1
});

Photo.create!({
  title: 'Great Wall of China',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440382574/Shuttr/2023283-great_wall_1.jpg',
  lat: 40.6769,
  long: 117.2319,
  user_id: 5
});

Photo.create!({
  title: 'Trolltunga',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440382579/Shuttr/grid-cell-25421-1406399437-11.jpg',
  lat: 60.1241,
  long: 6.74,
  user_id: 2
});

Photo.create!({
  title: 'Temple of Artemis at Ephesus',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440382586/Shuttr/temple1.jpg',
  lat: 37.9497,
  long: 27.3639,
  user_id: 3
});

Photo.create!({
  title: 'Manneken Pis',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440382971/Shuttr/Bruxelles_Manneken_Pis.jpg',
  lat: 50.845,
  long: 4.3499,
  user_id: 1
});

Photo.create!({
  title: 'Hollywood Sign',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383011/Shuttr/Hollywood-Sign.jpg',
  lat: 34.1341,
  long: -118.3217,
  user_id: 1
});

Photo.create!({
  title: 'Pink\'s Hot Dogs',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383047/Shuttr/Pinks_Hot_Dogs.jpg',
  lat: 34.0834,
  long: -118.3441,
  user_id: 1
});

Photo.create!({
  title: 'LACMA',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383069/Shuttr/lacma-city-lights-at-night.jpg',
  lat: 34.0629,
  long: -118.3578,
  user_id: 1
});

Photo.create!({
  title: 'Stonehenge',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383085/Shuttr/YBJVJxS.jpg',
  lat: 51.1788,
  long: -1.8262,
  user_id: 4
});

Photo.create!({
  title: 'Angkor Wat, Cambodia',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383098/Shuttr/101808894.jpg',
  lat: 13.4125,
  long: 103.8667,
  user_id: 5
});

Photo.create!({
  title: 'Annenberg Hall, Harvard University',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383110/Shuttr/091109_Annenberg_052.jpg',
  lat: 42.3744,
  long: -71.1169,
  user_id: 2
});

Photo.create!({
  title: 'Great Barrier Reef',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383127/Shuttr/sea-turtle.jpg',
  lat: -18.2861,
  long: 147.7,
  user_id: 3
});

Photo.create!({
  title: 'Victoria Falls, Zambia/Zimbabwe',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383219/Shuttr/vic_falls_feat_image.jpg',
  lat: -17.9244,
  long: 25.8567,
  user_id: 1
});

Photo.create!({
  title: 'Disneyland',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383236/Shuttr/disneyland-tickets__140518205906.jpg',
  lat: 33.809,
  long: -117.919,
  user_id: 1
});

Photo.create!({
  title: 'Niagara Falls',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383250/Shuttr/Kor9GTM.jpg',
  lat: 43.08,
  long: -79.071,
  user_id: 3
});

Photo.create!({
  title: 'Oxford university',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383310/Shuttr/o-OXFORD-UNIVERSITY-facebook.jpg',
  lat: 51.7611,
  long: -1.2534,
  user_id: 4
});

Photo.create!({
  title: 'Giant\’s causeway',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383383/Shuttr/hexagonal-basalt-slabs-giants-causeway-dipping-sea-antrim-coastline-northern-ireland-35309857.jpg',
  lat: 55.2408,
  long: -6.5117,
  user_id: 5
});

Photo.create!({
  title: 'Bellagio Hotel',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383416/Shuttr/Bellagio-Hotel-Las-Vegas-Strip.jpg',
  lat: 36.1131,
  long: -115.1764,
  user_id: 1
});

Photo.create!({
  title: 'St. Peter\’s Basilica',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383443/Shuttr/interior-of-St.-Peters.jpg',
  lat: 41.9022,
  long: 12.4533,
  user_id: 3
});

Photo.create!({
  title: 'Colosseum',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383464/Shuttr/colosseum_2448253k.jpg',
  lat: 41.8902,
  long: 12.4923,
  user_id: 4
});

Photo.create!({
  title: 'Pantheon',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383536/Shuttr/Pantheon.jpg',
  lat: 41.8986,
  long: 12.4768,
  user_id: 5
});

Photo.create!({
  title: 'Sistine Chapel',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383556/Shuttr/bmwl0xcfftailvu5dvlajbxii.645x1000x1.jpg',
  lat: 41.9031,
  long: 12.4544,
  user_id: 1
});

Photo.create!({
  title: 'Parthenon',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383571/Shuttr/parthenon1350355785429.jpg',
  lat: 37.9715,
  long: 23.7267,
  user_id: 2
});

Photo.create!({
  title: 'White House',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383593/Shuttr/whitehouse.jpg',
  lat: 38.8977,
  long: -77.0366,
  user_id: 3
});

Photo.create!({
  title: 'Mount Everest',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383613/Shuttr/Mount_Everest__topgold.jpg',
  lat: 27.9881,
  long: 86.9253,
  user_id: 4
});

Photo.create!({
  title: 'Waikiki Beach',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383627/Shuttr/waikiki.jpg',
  lat: 21.2752,
  long: -157.8312,
  user_id: 1
});

Photo.create!({
  title: 'Taj Mahal',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383689/Shuttr/VfJG5tr.jpg',
  lat: 27.175,
  long: 78.0419,
  user_id: 1
});

Photo.create!({
  title: 'Santorini, Greece',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383714/Shuttr/santorini-greece-photo-4.jpg',
  lat: 36.4167,
  long: 25.4333,
  user_id: 5
});

Photo.create!({
  title: 'Glacier National Park, Montana',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383755/Shuttr/pebbles-1.jpg',
  lat: 48.6967,
  long: -113.7183,
  user_id: 2
});

Photo.create!({
  title: 'Nishinomaru Garden',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383777/Shuttr/koraku-koishikawa-korakuen-gardens.jpg',
  lat: 34.6857,
  long: 135.5236,
  user_id: 3
});

Photo.create!({
  title: 'Infinite Pool, Hotel Marina Bay Sands',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383791/Shuttr/singapoore-infinity-pool.jpg',
  lat: 1.2832,
  long: 103.8601,
  user_id: 4
});

Photo.create!({
  title: 'The Subway, Zion National Park, Utah',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383807/Shuttr/1f32bd3c3e28a553fa013bfa2e3c3e54.jpg',
  lat: 37.2594,
  long: -112.95,
  user_id: 5
});

Photo.create!({
  title: 'Antelope Canyon',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383820/Shuttr/grid-cell-25099-1384882076-12.jpg',
  lat: 36.8618,
  long: -111.3743,
  user_id: 2
});

Photo.create!({
  title: 'Carrera Lake, Argentina',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383834/Shuttr/Caves_03.jpg',
  lat: -46.5833,
  long: -72,
  user_id: 3
});

Photo.create!({
  title: 'Capilano Suspension Bridge, Vancouver, British Columbia',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383849/Shuttr/capilano-suspension-bridge.jpg',
  lat: 49.3428,
  long: -123.1122,
  user_id: 1
});

Photo.create!({
  title: 'Eilean Donan Castle, Scotland',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383867/Shuttr/eilean-donan5.jpg',
  lat: 57.274,
  long: -5.5161,
  user_id: 4
});

Photo.create!({
  title: 'The Gardens At Marqueyssac, France',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383878/Shuttr/marqueyssac8.jpg',
  lat: 44.8338,
  long: 1.164,
  user_id: 6
});

Photo.create!({
  title: 'Interlaken, Switzerland',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383889/Shuttr/interlaken-grindelwald-in-the-bernese-oberland-from-zurich-in-zurich-118260.jpg',
  lat: 46.6833,
  long: 7.85,
  user_id: 5
});

Photo.create!({
  title: 'Machu Picchu',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383933/Shuttr/Machu-Pichu-Peru.jpg',
  lat: -13.1633,
  long: -72.5456,
  user_id: 2
});

Photo.create!({
  title: 'One World Trade Center',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383946/Shuttr/OneWorldTradeCenter.jpg',
  lat: 40.713,
  long: -74.0135,
  user_id: 3
});

Photo.create!({
  title: 'St Paul\'s Cathedral, London',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383960/Shuttr/213.jpg',
  lat: 51.5136,
  long: -0.0981,
  user_id: 1
});

Photo.create!({
  title: 'Petronas Towers, Kuala Lumpur',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383986/Shuttr/Petronas_Panorama_II.jpg',
  lat: 3.1578,
  long: 101.7116,
  user_id: 3
});

Photo.create!({
  title: 'Leaning Tower of Pisa',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440383999/Shuttr/pisa.jpg',
  lat: 43.7231,
  long: 10.3964,
  user_id: 4
});

Photo.create!({
  title: 'St Basil\'s Cathedral, Moscow',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384016/Shuttr/StBasils.jpg',
  lat: 55.7525,
  long: 37.6231,
  user_id: 5
});

Photo.create!({
  title: 'Sydney Opera House',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384039/Shuttr/6409684029_89f10e9b0d_b.jpg',
  lat: -33.8587,
  long: 151.214,
  user_id: 2
});

Photo.create!({
  title: 'Space Needle',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384048/Shuttr/ss-120419-seattle-space-needle-11.ss_full.jpg',
  lat: 47.6204,
  long: -122.3491,
  user_id: 3
});

Photo.create!({
  title: 'Buckingham Palace, London',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384060/Shuttr/buckingham-palace-GETTY.jpg',
  lat: 51.501,
  long: -0.1416,
  user_id: 1
});

Photo.create!({
  title: 'Burj Khalifa, Dubai',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384069/Shuttr/burj_khalifa01.jpg',
  lat: 25.1971,
  long: 55.2741,
  user_id: 4
});

Photo.create!({
  title: 'Palace of Versailles, france',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384080/Shuttr/versailles-mirrors.jpg',
  lat: 48.8044,
  long: 2.1232,
  user_id: 6
});

Photo.create!({
  title: 'Christ the Redeemer in Rio de Janeiro',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384098/Shuttr/christ-the-redeemer-statue-joel-sartore.jpg',
  lat: -22.9519,
  long: -43.2106,
  user_id: 5
});

Photo.create!({
  title: 'Brandenburg Gate in Berlin, Germany',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384109/Shuttr/Brandenburg_Gate.jpg',
  lat: 52.5163,
  long: 13.3777,
  user_id: 2
});

Photo.create!({
  title: 'Sagrada Familia in Barcelona, Spain',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384120/Shuttr/4e934898fd4f8c78ad899d46_pm8.jpg',
  lat: 41.4036,
  long: 2.1744,
  user_id: 3
});

Photo.create!({
  title: 'Easter Island in the Polynesian Triangle, Pacific Ocean',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384130/Shuttr/easter-island-the-moais-at-ahu-akivi-these-are-special-as-they-actually-look-at-the-sea.jpg',
  lat: -27.1167,
  long: -109.3667,
  user_id: 4
});

Photo.create!({
  title: 'Mount Rushmore in South Dakota',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384142/Shuttr/Mountrushmore.jpg',
  lat: 43.8789,
  long: -103.4598,
  user_id: 5
});

Photo.create!({
  title: 'The Great Buddha of Kamakura in Japan',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384153/Shuttr/GreatBuddhaStatue01.jpg',
  lat: 35.3168,
  long: 139.5357,
  user_id: 2
});

Photo.create!({
  title: 'Auschwitz in Poland',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384166/Shuttr/Auschwitz-Birkenau-krakow.jpg',
  lat: 50.0358,
  long: 19.1783,
  user_id: 3
});

Photo.create!({
  title: 'Chichen Itza in Mexico',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384177/Shuttr/chichen-itza-mexico.jpg',
  lat: 20.6829,
  long: -88.5686,
  user_id: 4
});

Photo.create!({
  title: 'Tower Bridge in London',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384188/Shuttr/big_olympic_rings_center_of_tower_bridge_london.jpg',
  lat: 51.5056,
  long: -0.0756,
  user_id: 1
});

Photo.create!({
  title: 'The Blue Mosque in Istanbul',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384199/Shuttr/Blue_Mosque_Istanbul.jpg',
  lat: 41.0055,
  long: 28.9774,
  user_id: 5
});

Photo.create!({
  title: 'Empire State Building',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384222/Shuttr/091511-Empire-State-Building-Picture-EXT-DAY.jpg',
  lat: 40.7484,
  long: -73.9857,
  user_id: 2
});

Photo.create!({
  title: 'Temple of Besakih in Bali, Indonesia',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384234/Shuttr/Besakih-Temple.jpg',
  lat: -8.3764,
  long: 115.517,
  user_id: 3
});

Photo.create!({
  title: 'The Louvre, France',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384246/Shuttr/Louvre_Museum_Paris_France.jpg',
  lat: 48.8611,
  long: 2.3364,
  user_id: 6
});

Photo.create!({
  title: 'Venice, Italy',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384259/Shuttr/131216venice-italy-67748.jpg',
  lat: 45.4375,
  long: 12.3358,
  user_id: 1
});

Photo.create!({
  title: 'Lotus Temple in New Delhi, India',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384340/Shuttr/Lotus-Temple-at-Night.jpg',
  lat: 28.5533,
  long: 77.2586,
  user_id: 1
});

Photo.create!({
  title: 'Zhangye Danxia landform in Gansu, China',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384362/Shuttr/enhanced-buzz-wide-7460-1383859235-18.jpg',
  lat: 38.9156,
  long: 100.1332,
  user_id: 4
});

Photo.create!({
  title: 'The swing at the \'End of the World\' in Baños, Ecuador',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384378/Shuttr/article-2656218-1EB16D4000000578-114_964x689.jpg',
  lat: 11.2414,
  long: -74.2134,
  user_id: 5
});

Photo.create!({
  title: 'The Great Blue Hole in Belize',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384392/Shuttr/grid-cell-9067-1406398057-9.jpg',
  lat: 17.3153,
  long: -87.5344,
  user_id: 2
});

Photo.create!({
  title: 'Tulip Fields, Netherlands',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384405/Shuttr/enhanced-buzz-wide-21811-1383843704-27.jpg',
  lat: 52.2,
  long: 4.5,
  user_id: 3
});

Photo.create!({
  title: 'The Hang Son Doong Cave',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384418/Shuttr/grid-cell-13682-1406398541-2.jpg',
  lat: 17.4569,
  long: 106.2875,
  user_id: 4
});

Photo.create!({
  title: 'Mendenhall Ice Caves of Juneau',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384430/Shuttr/enhanced-buzz-wide-7577-1383858647-15.jpg',
  lat: 58.4333,
  long: -134.53,
  user_id: 5
});

Photo.create!({
  title: 'Sea of Stars on Vaadhoo Islands',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384442/Shuttr/enhanced-buzz-wide-19789-1383926881-12.jpg',
  lat: 1.925,
  long: 73.4,
  user_id: 2
});

Photo.create!({
  title: 'Tunnel of Love in Klevan, Ukraine',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384456/Shuttr/grid-cell-21856-1384882321-0.jpg',
  lat: 51.8634,
  long: 41.8838,
  user_id: 3
});

Photo.create!({
  title: 'Salar De Uyuni',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384467/Shuttr/enhanced-buzz-wide-23889-1383952912-15.jpg',
  lat: -20.1338,
  long: -67.4891,
  user_id: 4
});

Photo.create!({
  title: 'Enchanted Well at Chapada Diamantina in Bahia, Brazil',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384482/Shuttr/bd9c8be7ee9332668e2e98f18f320021.jpg',
  lat: 50.6644,
  long: 4.7182,
  user_id: 5
});

Photo.create!({
  title: 'Glowworm Caves in Waitomo, New Zealand',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384496/Shuttr/enhanced-buzz-wide-5697-1384274999-20.jpg',
  lat: -38.2608,
  long: 175.1036,
  user_id: 2
});

Photo.create!({
  title: 'Cenotes of Yucatán Peninsula in Mexico',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384517/Shuttr/cenotes-mexico-56.jpg',
  lat: 20.7458,
  long: -89.875,
  user_id: 3
});

Photo.create!({
  title: 'Kelimutu crater lakes in Flores Island, Indonesia',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384529/Shuttr/The-World-is-a-Colorful-Place2.jpg',
  lat: -8.7662,
  long: 121.8141,
  user_id: 4
});

Photo.create!({
  title: 'Little Mermaid, Denmark',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384542/Shuttr/7137100987_c42fbabe1f_o_d.jpg',
  lat: 55.6929,
  long: 12.5993,
  user_id: 5
});

Photo.create!({
  title: 'Arc de Triomphe',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384553/Shuttr/Arc-de-Triomphe.jpg',
  lat: 48.8738,
  long: 2.295,
  user_id: 6
});

Photo.create!({
  title: 'Pon des Arts Bridge',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384563/Shuttr/original.jpg',
  lat: 45.7847,
  long: 4.876,
  user_id: 2
});

Photo.create!({
  title: 'Forbidden City, China',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384580/Shuttr/famous-landmarks-forbidden-city-in-beijing15.jpg',
  lat: 39.9147,
  long: 116.3906,
  user_id: 3
});

Photo.create!({
  title: 'Times Square, NYC',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384595/Shuttr/timessquare.jpg',
  lat: 40.7577,
  long: -73.9857,
  user_id: 4
});

Photo.create!({
  title: 'Matterhorn',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384609/Shuttr/Beautiful-Matterhorn-mountain.jpg',
  lat: 45.9764,
  long: 7.6583,
  user_id: 5
});

Photo.create!({
  title: 'Cloud gate, Chicago',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384622/Shuttr/chicago-The-Bean.jpg',
  lat: 41.8827,
  long: -87.6233,
  user_id: 2
});

Photo.create!({
  title: 'Terra Cotta Warriors',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384634/Shuttr/0643F4AB0000044D-3070079-image-a-1_1430908516975.jpg',
  lat: 34.3849,
  long: 109.2731,
  user_id: 3
});

Photo.create!({
  title: 'Hagia Sophia',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384645/Shuttr/Turkey-2012-355_web-lrg.jpg',
  lat: 41.0085,
  long: 28.9799,
  user_id: 4
});

Photo.create!({
  title: 'Spanish Steps',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384659/Shuttr/img_0695.jpg',
  lat: 41.906,
  long: 12.4832,
  user_id: 5
});

Photo.create!({
  title: 'Gateway Arch',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384673/Shuttr/35121359001_3912044143001_635500984175190108-94786717.jpg',
  lat: 38.6245,
  long: -90.1847,
  user_id: 2
});

Photo.create!({
  title: 'Moulin Rouge',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384685/Shuttr/Moulin-Rouge.jpg',
  lat: 48.8842,
  long: 2.3325,
  user_id: 3
});

Photo.create!({
  title: 'Rocinha, Rio de Janeiro, Brazil',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384695/Shuttr/Rocinha5.jpg',
  lat: -22.9886,
  long: -43.2483,
  user_id: 4
});

Photo.create!({
  title: 'Vatican City',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384715/Shuttr/Vatican-city.jpg',
  lat: 41.9033,
  long: 12.4533,
  user_id: 5
});

Photo.create!({
  title: 'The Painted Ladies',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384727/Shuttr/kr9kIOa.jpg',
  lat: 37.7764,
  long: -122.4331,
  user_id: 6
});

Photo.create!({
  title: 'The Googleplex',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384736/Shuttr/6c283c62e7710e6de559efd62caf7b08.jpg',
  lat: 37.4184,
  long: -122.088,
  user_id: 6
});

Photo.create!({
  title: 'App Academy',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384748/Shuttr/appacademy620.jpg',
  lat: 37.7817,
  long: -122.4109,
  user_id: 1
});

Photo.create!({
  title: 'Alcatraz Island',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384758/Shuttr/alcatraz_island_prison5869.jpg',
  lat: 37.8267,
  long: -122.4233,
  user_id: 6
});

Photo.create!({
  title: 'Humphry Slocombe',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384768/Shuttr/4338611707_457e05030f.jpg',
  lat: 37.7527,
  long: -122.4119,
  user_id: 1
});

Photo.create!({
  title: 'Mitchell\’s Ice Cream',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384784/Shuttr/mitchells-ice-cream-74924.jpg',
  lat: 37.7442,
  long: -122.4224,
  user_id: 6
});

Photo.create!({
  title: 'Mission Chinese',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384795/Shuttr/selby-missionchinese-tmagArticle.jpg',
  lat: 37.7612,
  long: -122.4193,
  user_id: 6
});

Photo.create!({
  title: 'Boudin Bakery',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384807/Shuttr/Boudin_Bakery__Fisherman_s_Wharf_baker_showing_off_crab_1.jpg',
  lat: 37.8085,
  long: -122.4149,
  user_id: 6
});

Photo.create!({
  title: 'Ike\'s Place',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384823/Shuttr/DSC07704.jpg',
  lat: 37.7644,
  long: -122.4303,
  user_id: 6
});

Photo.create!({
  title: 'State Bird Provisions',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384835/Shuttr/05-State-Bird-Provisions-Interior.jpg',
  lat: 37.7835,
  long: -122.4326,
  user_id: 6
});

Photo.create!({
  title: 'House of Prime Rib',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384845/Shuttr/house-of-prime-rib-san-francisco-ca-usa-restaurants-10best-users-recommend-1550855_54_990x660_201406011141.jpg',
  lat: 37.7931,
  long: -122.4227,
  user_id: 6
});

Photo.create!({
  title: 'The House',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384860/Shuttr/The_20House_04.jpg',
  lat: 37.7983,
  long: -122.4071,
  user_id: 6
});

Photo.create!({
  title: 'Nopa',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384871/Shuttr/sf1111.jpg',
  lat: 37.7746,
  long: -122.4375,
  user_id: 6
});

Photo.create!({
  title: 'San Tung Chinese Restaurant',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384883/Shuttr/img_1894.jpg',
  lat: 37.7638,
  long: -122.4685,
  user_id: 6
});

Photo.create!({
  title: 'Burma Superstar',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384893/Shuttr/IMG_2007.jpg',
  lat: 37.783,
  long: -122.4622,
  user_id: 6
});

Photo.create!({
  title: 'Saigon Sandwich',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384906/Shuttr/saigonsandwich.jpg',
  lat: 37.7829,
  long: -122.4174,
  user_id: 6
});

Photo.create!({
  title: 'Brenda\'s French Soul Food',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384916/Shuttr/LesMis-04.jpg',
  lat: 37.7827,
  long: -122.4191,
  user_id: 6
});

Photo.create!({
  title: 'Gary Danko',
  url: 'http://res.cloudinary.com/dydhzgrty/image/upload/v1440384927/Shuttr/dankocorner.jpg',
  lat: 37.8058,
  long: -122.4202,
  user_id: 6
});

Comment.create!({user_id: 6, photo_id: 1, body: "The love the lights!"})
Comment.create!({user_id: 1, photo_id: 1, body: "I want to go to Paris!"})

Comment.create!({user_id: 1, photo_id: 114, body: "Best affordable sandwiches around!"})

Comment.create!({user_id: 2, photo_id: 109, body: "I've never had a piece of meat so tasty."})

Comment.create!({user_id: 4, photo_id: 14, body: "I saw Kim Kardashian in line!"})
Comment.create!({user_id: 6, photo_id: 14, body: "I just had to take the picture :X"})

Comment.create!({user_id: 4, photo_id: 14, body: "I saw Kim Kardashian in line!"})
Comment.create!({user_id: 6, photo_id: 14, body: "I j"})

# Album.create!({title: "Euro-trip",
#url: "http://www.greatbuildings.com/gbc/thumbnails/cid_1123539042_05221v.250.jpg",
#                user_id: "1" })
#
# Album.create!({title: "Food",
#url: "http://ak-static.scoopon.com.au/scpn/deals/main/45000/45813_1.jpg",
#                user_id: "1" })
#
# Album.create!({title: "Around SF",
#url: "http://en-img.hb-assets.com/r231/assets/common/images/destinations/san_francisco.png",
#                user_id: "2" })
#
# Album.create!({title: "My Pets",
#url: "http://puppyparadise.com/images/Breeds/eng01.jpg",
#                user_id: "3" })
