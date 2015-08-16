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
    this.$("#map-canvas").html(this.mapView.$el);
    this.$(".photo-gutter").html(this.photoGutter.render().$el);
    this.mapView.render();
    return this;
  },

  addMap: function() {
    var mapShow = new Shuttr.Views.MapShow({ collection: this.collection });
    this.addSubview("#map-canvas", mapShow);
  },

  addPhotoGutter: function() {
    var photoGutter = new Shuttr.Views.PhotoGutter({ collection: this.collection });
    this.addSubview(".photo-gutter", photoGutter);
  },


});
