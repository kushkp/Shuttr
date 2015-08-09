# Shuttr

[Heroku link][heroku]

[heroku]: http://flux-capacitr.herokuapp.com

## Minimum Viable Product
Shuttr is a clone of Flickr built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create albums
- [ ] Upload pictures
- [ ] View albums and pictures (album/picture index page)
- [ ] View a single picture (picture show page)
- [ ] Map view of pictures
- [ ] Update picture index at bottom of page when moving map
- [ ] Select picture for preview on map

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

### Phase 2: Viewing Album and Picture Indexes (~2 days)
I will add API routes to serve album and picture data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create albums and view both album and picture
indexes, all inside a single Backbone app.

[Details][phase-two]

### Phase 3: Viewing Single Album and Pictures (~1 days)
I will add routes that fetch a single album and picture. By the end of this
phase, users will be able to click on a single album or picture to load
its show page.

[Details][phase-three]

### Phase 4: Viewing Map of Posts (~3 days)
I plan to use third-party libraries to add functionality, such as integrating
Filepicker for file upload so users can upload images. I will also integrate the
Google map API, so pictures can be viewed on a map by location, and users can
select a location when uploading the pictures.

[Details][phase-four]

### Phase 5: Picture Refreshing (~1-2 days)
After integrating the map, I will have the picture gutter refresh its contents
using location based filtering on the current map view. When the user clicks on
a location pin on the map, it will generate a preview. I will also implement
preview refreshing so that the pictures will move without collapsing, when the
user moves the map.

[Details][phase-five]


### Bonus Features (TBD)
- [ ] Drag and drop file for picture upload
- [ ] "Like" button for pictures
- [ ] Toggle Heat map of picture location
- [ ] Checkboxes for changing picture albums
- [ ] Multiple sessions/session management
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
