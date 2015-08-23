Shuttr.Views.MapContainer = Backbone.CompositeView.extend ({
  template: JST['map/container'],
  className: 'map',

  initialize: function() {

    this.mapView = new Shuttr.Views.MapShow({ collection: this.collection });
    this.photoGutter = new Shuttr.Views.PhotoGutter({ collection: this.collection });
  },

  events: {
    'mouseenter .gutter-item-img' : 'startBounce',
    'mouseleave .gutter-item-img' : 'stopBounce',
    'click .gutter-item-img' : 'launchPhotoShowModal',
    "click .toggleHeatmap": "toggleHeatmap"
  },

  toggleHeatmap: function(e) {
    this.mapView.toggleHeatmap(e);
  },

  render: function() {
    $("body").addClass("loading");
    var content = this.template();
    this.$el.html(content);
    this.$(".photo-gutter").html(this.photoGutter.render().$el);
    this.$("#map-wrapper").html(this.mapView.$el);
    this.mapView.render();
    this.onRender();
    return this;
  },

  onRender: function() {
    this.delegateEvents();
    $("body").removeClass("loading");

  },

  addMap: function() {
    var mapShow = new Shuttr.Views.MapShow({ collection: this.collection });
    this.addSubview("#map-wrapper", mapShow);
  },

  addPhotoGutter: function() {
    var photoGutter = new Shuttr.Views.PhotoGutter({ collection: this.collection });
    this.addSubview(".photo-gutter", photoGutter);
  },

  startBounce: function(event) {
    var photoId = $(event.currentTarget).data("id");
    this.mapView.startBounce(photoId);
  },

  stopBounce: function(event) {
    var photoId = $(event.currentTarget).data("id");
    this.mapView.stopBounce(photoId);
  },

  launchPhotoShowModal: function(event) {
    this.stopBounce(event);
    var photoId = $(event.currentTarget).data("id");
    var photo = this.collection.getOrFetch(photoId);
    var modal = new Shuttr.Views.PhotoShow({ model: photo });
    $('body').append(modal.$el);
    modal.render();
  }
});
