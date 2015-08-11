Shuttr.Collections.Albums = Backbone.Collection.extend({
  url: "/api/albums",
  model: Shuttr.Models.Album,

  getOrFetch: function(id) {
    var collection = this;
    var album = collection.get(id);
    if (album) {
      album.fetch();
    } else {
      album = new Shuttr.Models.Album({id: id});
      collection.add(album);
      album.fetch({
        error: function() { collection.remove(album); }
      });
    }

    return album;
  }
});
