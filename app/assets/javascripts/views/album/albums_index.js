Shuttr.Views.AlbumsIndex = Backbone.CompositeView.extend({
  template: JST["album/index"],
  className: "albums",

  initialize: function() {
    this.listenTo(this.collection, "sync", this.reloadMasonry);
    this.listenTo(this.collection, 'add', this.addAlbumItem);
    this.listenTo(this.collection, "remove", this.removeAlbumItem);
    this.collection.each(this.addAlbumItem.bind(this));
  },

  events: {
    'click .new-album-button' : 'launchNewAlbumModal'
  },

  render: function() {
    var content = this.template({ albums: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    this.callMasonry();
    return this;
  },

  addAlbumItem: function(album) {
    var subview = new Shuttr.Views.AlbumIndexItem({ model: album });
    this.addSubview('.album-grid', subview);
    this.reloadMasonry();
  },

  removeAlbumItem: function(album) {
    this.removeModelSubview(".album-grid", album);
    this.reloadMasonry();
  },

  callMasonry: function() {
    var $container = this.$('.album-grid');

    $container.imagesLoaded(function() {
      $container.masonry({
        itemSelector: '.album-grid-item',
        columnWidth: 1
      });
    });
  },

  reloadMasonry: function (obj) {
    this.$(".album-grid").masonry("reload");
  },

  launchNewAlbumModal: function(e) {
    var album = new Shuttr.Models.Album();
    var modal = new Shuttr.Views.AlbumForm({ model: album, collection: this.collection });
    $('body').append(modal.$el);
    modal.render();
    this.$el.css({ "-webkit-filter": "blur(3px)", "-moz-filter": "blur(3px)", "-o-filter": "blur(3px)", "-ms-filter": "blur(3px)", "filter": "blur(3px)" });
  }
});
