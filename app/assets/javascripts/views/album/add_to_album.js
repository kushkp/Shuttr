Shuttr.Views.AddToAlbum = Backbone.View.extend({
  template: JST["album/add_to_album"],
  className: "add-to-album-wrapper",

  initialize: function(options) {
    this.albums = options.albums;
    this.listenTo(this.albums, "sync", this.render);
    $(document).on('keyup', this.handleKey.bind(this));
  },

  events: {
    "submit .add-to-album-form" : "saveToAlbum",
    'click .add-to-album-background' : 'clickAway',
    'click .close' : 'removeBtn'
  },

  render: function() {
    var content = this.template({photo: this.model, albums: this.albums});
    this.$el.html(content);
    this.$("#album-id").focus();
    return this;
  },

  saveToAlbum: function(e) {
    e.preventDefault();
    var formdata = $(e.currentTarget).serializeJSON();
    var view = this;

    var albuming = new Shuttr.Models.Albuming();

    albuming.save(formdata.album, {
      success: function() {
        view.hideModal();
      },
      error: function() {
        console.log("add to album error");
      }
    });
  },

  handleKey: function(event) {
    if (event.keyCode === 27) {
      this.hideModal();
    }
  },

  removeBtn: function(event) {
    event.preventDefault();
    this.hideModal();
  },

  clickAway: function(event) {
    this.hideModal();
  },

  hideModal: function (event) {
    this.remove();
  }
});
