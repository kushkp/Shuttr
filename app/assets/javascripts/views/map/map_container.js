Shuttr.Views.MapContainer = Backbone.CompositeView.extend ({
  template: JST['map/container'],
  className: 'map',

  initialize: function() {
    this.mapView = new Shuttr.Views.MapShow({ collection: this.collection });
    this.photoGutter = new Shuttr.Views.PhotoGutter({ collection: this.collection });
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.$(".photo-gutter").html(this.photoGutter.render().$el);
    this.$("#map-canvas").html(this.mapView.$el);
    this.mapView.render();
    this.onRender();
    return this;
  },

  onRender: function() {
  },

  addMap: function() {
    var mapShow = new Shuttr.Views.MapShow({ collection: this.collection });
    this.addSubview("#map-canvas", mapShow);
  },

  addPhotoGutter: function() {
    var photoGutter = new Shuttr.Views.PhotoGutter({ collection: this.collection });
    this.addSubview(".photo-gutter", photoGutter);
  }
});
