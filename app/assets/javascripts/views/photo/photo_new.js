Shuttr.Views.PhotoNew = Backbone.CompositeView.extend ({
  template: JST["photo/new"],

  events: {
    "submit form" : "upload"
  },

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render);
    this.addMap();
  },

  render: function() {
    var content = this.template({ photo: this.model, albums: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addMap: function() {
    var formPageMap = new Shuttr.Views.FormPageMap();
    this.addSubview("#formpage-map-canvas", formPageMap);
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
