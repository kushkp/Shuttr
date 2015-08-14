Shuttr.Views.MapContainer = Backbone.CompositeView.extend ({
  template: JST['map/container'],
  className: 'map',

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.addMap();
    // this.addPhotoGutter();
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addMap: function() {
    var mapView = new Shuttr.Views.MapView();
    this.addSubview("#map-canvas", mapView);
  },

  addPhotoGutter: function() {
    var photoGutter = new Shuttr.Views.PhotoGutter({ collection: this.collection });
    this.addSubview(".photo-gutter", photoGutter);
  }
});
