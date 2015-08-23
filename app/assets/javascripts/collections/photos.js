Shuttr.Collections.Photos = Backbone.Collection.extend ({
  url: "/api/photos",
  model: Shuttr.Models.Photo,

  getOrFetch: function(id) {
    var collection = this;
    var photo = collection.get(id);
    if (photo) {
      photo.fetch();
    } else {
      photo = new Shuttr.Models.Photo({id: id});
      collection.add(photo);
      photo.fetch({
        error: function() { collection.remove(photo); }
      });
    }

    return photo;
  },

  parse: function(response) {
    this.page_number = parseInt(response.page_number);
    this.total_pages = parseInt(response.total_pages);
    return response.models;
  }
});
