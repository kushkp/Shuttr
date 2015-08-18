Shuttr.Views.MapShow = Backbone.View.extend ({

  attributes: {
    id: "map-canvas"
  },

  initialize: function() {
    this._markers = {};

    this.listenTo(this.collection, 'add', this.addMarker);
    this.listenTo(this.collection, 'remove', this.removeMarker);
    this.hotIcon = "http://maps.google.com/mapfiles/ms/icons/purple-dot.png";
  },

  render: function() {
    var mapOptions = {
      center: { lat: 37.7833, lng: -122.4167 },
      zoom: 2
    };

    this._map = new google.maps.Map(this.el, mapOptions);
    this.collection.each(this.addMarker.bind(this));
    this.attachMapListeners();
  },

  attachMapListeners: function() {
    google.maps.event.addListener(this._map, 'idle', this.search.bind(this));
  },

  addMarker: function(photo) {
    if (this._markers[photo.id]) { return; }

    var view = this;
    var marker = new google.maps.Marker({
      position: { lat: parseFloat(photo.get('lat')), lng: parseFloat(photo.get('long')) },
      map: this._map,
      title: photo.get('title'),
      animation: google.maps.Animation.DROP
    });

    google.maps.event.addListener(marker, 'click', function(e) {
      view.showMarkerInfo(event, marker);
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
  },

  search: function() {
    var mapBounds = this._map.getBounds();
    var ne = mapBounds.getNorthEast();
    var sw = mapBounds.getSouthWest();

    var filterData = {
      lat: [sw.lat(), ne.lat()],
      long: [sw.lng(), ne.lng()]
    };

    this.collection.fetch({
      data: { filter_data: filterData }
    });
  },

  startBounce: function(id) {
    var marker = this._markers[id];
    marker.setAnimation(google.maps.Animation.BOUNCE);
    marker.setIcon(this.hotIcon);
  },

  stopBounce: function(id) {
    var marker = this._markers[id];
    marker.setAnimation(null);
    marker.setIcon();
  }
});
