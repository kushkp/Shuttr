Shuttr.Views.AlbumsIndex = Backbone.CompositeView.extend({
  template: JST["album/index"],
  className: "albums",

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.collection.each(this.addIndexItem.bind(this));
  },

  render: function() {
    var content = this.template({ albums: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    this.callMasonry();
    return this;
  },

  addIndexItem: function(album) {
    var subview = new Shuttr.Views.AlbumIndexItem({ model: album });
    this.addSubview('.album-grid', subview);
  },

  callMasonry: function() {
    var $container = this.$('.album-grid');

    $container.imagesLoaded(function() {
      $container.masonry({
        itemSelector: '.album-grid-item',
        columnWidth: 1
      });
    });
  }
});
