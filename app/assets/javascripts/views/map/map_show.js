Shuttr.Views.MapShow = Backbone.View.extend ({

  attributes: {
    id: "map-canvas"
  },

  initialize: function() {
    this._markers = {};

    this.listenTo(this.collection, 'add', this.addMarker);
    this.listenTo(this.collection, 'remove', this.removeMarker);
  },

  render: function() {
    var mapOptions = {
      center: { lat: 37.7833, lng: -122.4167 },
      zoom: 1
    };

    this._map = new google.maps.Map(this.el, mapOptions);
    // debugger
    this.collection.each(this.addMarker.bind(this));
  },

  addMarker: function(photo) {
    if (this._markers[photo.id]) { return; }
    // debugger;
    var view = this;
    var marker = new google.maps.Marker({
      // position: { lat: photo.get('lat'), lng: photo.get('long') },
      // map: this._map,
      // title: photo.get('title')
      // position: { lat: 48.4224, lng: 2.3453 },
      // map: this._map,
      // title: "Hello World"
    });

    google.maps.event.addListener(marker, 'click', function(e) {
      view.showMarkerInfo(event, marker);
      // alert("marker info!");
    });

    this._markers[photo.id] = marker;
  },

  removeMarker: function(photo) {
    var marker = this._markers[photo.id];
    marker.setMap(null);
    delete this._markers[photo.id];
  },

  showMarkerInfo: function (event, marker) {
    var infoWindow = new google.maps.InfoWindow({
      content: marker.title
    });

    infoWindow.open(this._map, marker);
  }
});
