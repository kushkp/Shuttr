Shuttr.Views.PhotoNew = Backbone.CompositeView.extend ({
  template: JST["photo/new"],
  className: 'formpage-container',

  events: {
    "submit form" : "upload",
    'click .m-background' : 'clickAway',
    'click .close' : 'removeBtn'
  },

  initialize: function(options) {
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

  upload: function(e) {
    e.preventDefault();
    var view = this;
    var photo = this.model;
    var formdata = $(e.currentTarget).serializeJSON();
    if (this.formPageMap._marker !== null &&
        typeof this.formPageMap._marker.position !== "undefined") {
          formdata.photo.lat = this.formPageMap._marker.position.G;
          formdata.photo.long = this.formPageMap._marker.position.K;
    }

    photo.set(formdata.photo);

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      var data = result[0];
      if (photo.get('title') === '') {
        photo.set({title: data.original_filename});
      }
      photo.set({url: data.url});

      var uploadModal = view;
      photo.save({}, {
        success: function() {
          this.collection.add(photo);
          $('.upload-form-wrapper').css('display', 'none');
          $('.photo-saved').css('display', 'block');
          setTimeout(function() {
            uploadModal.remove();
          }.bind(this), 1500);
        }.bind(this),
        error: function() {
          console.log("photo upload error");
        }
      });
    }.bind(this));
  },

  handleKey: function(event) {
    if (event.keyCode === 27) {
      this.remove();
    }
  },

  removeBtn: function(event) {
    event.preventDefault();
    this.remove();
  },

  clickAway: function(event) {
    this.remove();
  }

});
