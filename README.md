# Shuttr

[Heroku link][heroku]

[heroku]: http://shuttr-app.herokuapp.com

## Minimum Viable Product
Shuttr is a clone of Flickr built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create albums
- [ ] Upload photos
- [ ] View albums and photos (album/photo index page)
- [ ] View a single photo (photo show page)
- [ ] Map view of photos
- [ ] Update photo index at bottom of page when moving map
- [ ] Select photo for preview on map

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Album Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create albums using
a simple text form in a Rails view. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Viewing Album and Photo Indexes (~2 days)
I will add API routes to serve album and photo data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create albums and view both album and photo
indexes, all inside a single Backbone app.

[Details][phase-two]

### Phase 3: Viewing Single Album and Photos (~1 days)
I will add routes that fetch a single album and photo. By the end of this
phase, users will be able to click on a single album or photo to load
its show page.

[Details][phase-three]

### Phase 4: Viewing Map of Posts (~3 days)
I plan to use third-party libraries to add functionality, such as integrating
Filepicker for file upload so users can upload images. I will also integrate the
Google map API, so photos can be viewed on a map by location, and users can
select a location when uploading the photos.

[Details][phase-four]

### Phase 5: Photo Refreshing (~1-2 days)
After integrating the map, I will have the photo gutter refresh its contents
using location based filtering on the current map view. When the user clicks on
a location pin on the map, it will generate a preview. I will also implement
preview refreshing so that the photos will move without collapsing, when the
user moves the map.

[Details][phase-five]


### Bonus Features (TBD)
- [ ] Drag and drop file for photo upload
- [ ] "Like" button for photos
- [ ] Toggle Heat map of photo location
- [ ] Checkboxes for changing photo albums
- [ ] Multiple sessions/session management
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
