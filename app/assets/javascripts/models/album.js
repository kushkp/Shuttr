Shuttr.Models.Album = Backbone.Model.extend({
  urlRoot: "/api/albums",

  photos: function() {
  if (this._photos === undefined ) {
    this._photos = new Shuttr.Collections.Photos( [], { album: this });
  }

  return this._photos;
},

parse: function(response) {
  if (response.photos) {
    this.photos().set(response.photos);
    delete response.photos;
  }
  return response;
}
});
