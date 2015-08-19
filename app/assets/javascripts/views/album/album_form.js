Shuttr.Views.AlbumForm = Backbone.View.extend({
  template: JST["album/form"],
  className: "new-album-form-wrapper",

  initialize: function() {
    $(document).on('keyup', this.handleKey.bind(this));
  },

  events: {
    "submit .new_album-form" : "saveAlbum",
    'click .m-background' : 'clickAway',
    'click .close' : 'removeBtn'
  },

  render: function() {
    var content = this.template({album: this.model});
    this.$el.html(content);
    this.$("input.album-title").focus();
    return this;
  },

  saveAlbum: function(e) {
    e.preventDefault();
    var formdata = $(e.currentTarget).serializeJSON();
    var view = this;
    this.model.save(formdata, {
      success: function() {
        this.collection.add(this.model);
        view.hideModal();
      }.bind(this),
      error: function() {
        console.log("save album error");
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
    $('.albums').css({ "-webkit-filter": "blur(0px)", "-moz-filter": "blur(0px)", "-o-filter": "blur(0px)", "-ms-filter": "blur(0px)", "filter": "blur(0px)" });
    this.remove();
  },
});
