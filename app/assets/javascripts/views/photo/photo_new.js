Shuttr.Views.PhotoNew = Backbone.CompositeView.extend ({
  template: JST["photo/new"],
  className: 'formpage-container',

  events: {
    "submit form" : "upload",
    'click .m-background' : 'clickAway',
    'click .close' : 'removeBtn'
  },

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render);
    // this.addMap();
    this.formPageMap = new Shuttr.Views.FormPageMap({ model: this.model });
    $(document).on('keyup', this.handleKey.bind(this));
  },

  render: function() {
    var content = this.template({ photo: this.model, albums: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    this.$('#formpage-map-canvas').html(this.formPageMap.$el);
    this.formPageMap.render();
    $('#photo-title').focus();
    return this;
  },

  onRender: function() {

  },

  addMap: function() {
    // var formPageMap = new Shuttr.Views.FormPageMap();
    // this.addSubview("#formpage-map-canvas", formPageMap);
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
          this.remove();
        }.bind(this),
        error: function() {
          console.log("error");
        }
      });
    });
  },

  handleKey: function(event) {
    if (event.keyCode === 27) {
      this.remove();
      // window.history.back();
    }
  },

  removeBtn: function(event) {
    event.preventDefault();
    this.remove();
      // window.history.back();
  },

  clickAway: function(event) {
    this.remove();
      // window.history.back();
  }

});
