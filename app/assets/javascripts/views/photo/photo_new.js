Shuttr.Views.PhotoNew = Backbone.View.extend ({
  template: JST["photo/new"],

  events: {
    "submit form" : "upload"
  },

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template({ photo: this.model, albums: this.collection });
    this.$el.html(content);
    return this;
  },

  upload: function(e) {
    e.preventDefault();
    var photo = this.model;
    var formdata = $(e.currentTarget).serializeJSON();
    photo.set(formdata.photo);

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      var data = result[0];
      photo.set({url: data.url});
      console.log(data);
      photo.save({}, {
        success: function() {
          console.log("success");
        },
        error: function() {
          console.log("error");
        }
      });
    });
  }

});
