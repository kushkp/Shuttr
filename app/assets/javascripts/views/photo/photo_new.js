Shuttr.Views.PhotoNew = Backbone.View.extend ({
  template: JST["photo/new"],

  events: {
    "submit form" : "upload"
  },

  initialize: function() {

  },

  render: function() {
    var content = this.template({ photo: this.model });
    this.$el.html(content);
    return this;
  },

  upload: function(e) {
    e.preventDefault();
    var photo = this.model;

    var formdata = $(e.currentTarget).serializeJSON();
    debugger;
    photo.set(formdata);

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      var data = result[0];
      photo.set({url: data.url});
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