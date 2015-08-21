Shuttr.Collections.Albumings = Backbone.Collection.extend({
  url: "/api/albumings",
  model: Shuttr.Models.Albuming,

  getOrFetch: function(id) {
    var collection = this;
    var albuming = collection.get(id);
    if (albuming) {
      albuming.fetch();
    } else {
      albuming = new Shuttr.Models.Albuming({id: id});
      collection.add(albuming);
      albuming.fetch({
        error: function() { collection.remove(albuming); }
      });
    }

    return albuming;
  }
});
