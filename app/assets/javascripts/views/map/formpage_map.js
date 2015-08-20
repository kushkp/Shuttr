Shuttr.Views.FormPageMap = Backbone.View.extend ({

  attributes: {
    id: "formpage-map-canvas"
  },

  initialize: function() {
    this._marker = null;
    this.listenTo(this.model, "change", this.addMarker);
  },

  render: function() {
    var mapOptions = {
      center: { lat: 37.7833, lng: -122.4167 },
      zoom: 4
    };

    this._map = new google.maps.Map(this.el, mapOptions);
    this.attachMapListeners();
  },

  attachMapListeners: function() {
    google.maps.event.addListener(
      this._map, 'click', this.createPhoto.bind(this)
    );
  },

  createPhoto: function(event) {
    this.model.set({
      lat: event.latLng.lat(),
      long: event.latLng.lng()
    });
  },

  addMarker: function(photo) {
    if (this._marker) { this._marker.setMap(null); }
    var marker = new google.maps.Marker({
      position: {
        lat: photo.get('lat'),
        lng: photo.get('long') },
      map: this._map
    });

    this._marker = marker;
  }

});
