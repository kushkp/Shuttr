Shuttr.Views.MapShow = Backbone.View.extend ({

  attributes: {
    id: "map-canvas"
  },

  // events: {
  // },

  initialize: function() {
    this._markers = [];
    this.openInfoWindow = null;
    this.loadHeatMap();
    this.listenTo(this.collection, 'sync', this.loadHeatMap);
    this.listenTo(this.collection, 'add', this.addMarker);
    this.listenTo(this.collection, 'remove', this.removeMarker);
    this.coldIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    this.hotIcon = "http://maps.google.com/mapfiles/ms/icons/purple-dot.png";
  },

  render: function() {
    var mapOptions = {
      center: { lat: 37.7833, lng: -122.4167 },
      zoom: 2
    };

    this._map = new google.maps.Map(this.el, mapOptions);

    this.autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete')), {
        types: ["geocode"]
      });
    this.places = new google.maps.places.PlacesService(this._map);
    this.autocomplete.addListener('place_changed', this.onPlaceChanged.bind(this));

    // document.getElementById('country').addEventListener(
    //   'change', setAutocompleteCountry);


    this.collection.each(this.addMarker.bind(this));
    // this.loadHeatMap(this.collection);
    this.attachMapListeners();
    // this.heatmap.setMap(this.heatmap.getMap() ? null : this._map);
    // debugger
  },

  searchLoc: function() {
  var search = {
    types: ['geocode']
  };

    this.places.nearbySearch(search, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.clearResults();
        this.clearMarkers();
        // Create a marker for each hotel found, and
        // assign a letter of the alphabetic to each marker icon.
        for (var i = 0; i < results.length; i++) {
          var markerLetter = String.fromCharCode('A'.charCodeAt(0) + i);
          var markerIcon = MARKER_PATH + markerLetter + '.png';
          // Use marker animation to drop the icons incrementally on the map.
          this.markers[i] = new google.maps.Marker({
            position: results[i].geometry.location,
            animation: google.maps.Animation.DROP,
            icon: markerIcon
          });
          // If the user clicks a hotel marker, show the details of that hotel
          // in an info window.
          this.markers[i].placeResult = results[i];
          google.maps.event.addListener(markers[i], 'click', showInfoWindow);
          setTimeout(dropMarker(i), i * 100);
          this.addResult(results[i], i);
        }
      }
    });
  },

  dropMarker: function(i) {
    return function() {
      this.markers[i].setMap(map);
    }.bind(this);
  },

  addResult: function(result, i) {
    var results = document.getElementById('results');
    var markerLetter = String.fromCharCode('A'.charCodeAt(0) + i);
    var markerIcon = MARKER_PATH + markerLetter + '.png';

    var tr = document.createElement('tr');
    tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
    tr.onclick = function() {
      google.maps.event.trigger(markers[i], 'click');
    };

    var iconTd = document.createElement('td');
    var nameTd = document.createElement('td');
    var icon = document.createElement('img');
    icon.src = markerIcon;
    icon.setAttribute('class', 'placeIcon');
    icon.setAttribute('className', 'placeIcon');
    var name = document.createTextNode(result.name);
    iconTd.appendChild(icon);
    nameTd.appendChild(name);
    tr.appendChild(iconTd);
    tr.appendChild(nameTd);
    results.appendChild(tr);
  },

  clearResults: function() {
    var results = document.getElementById('results');
    while (results.childNodes[0]) {
      results.removeChild(results.childNodes[0]);
    }
  },

  onPlaceChanged: function() {
    var place = this.autocomplete.getPlace();
    if (place.geometry) {
      this._map.panTo(place.geometry.location);
      this._map.setZoom(10);
      this.searchLoc();
    } else {
      document.getElementById('autocomplete').placeholder = 'Enter a city';
    }
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
      animation: google.maps.Animation.DROP,
      icon: this.coldIcon
    });

    google.maps.event.addListener(marker, 'mouseover', function(e) {
      this.openInfoWindow = view.showMarkerInfo(event, marker);
    }.bind(this));

    google.maps.event.addListener(marker, 'mouseout', function(e) {
      this.openInfoWindow.close();
    }.bind(this));

    google.maps.event.addListener(marker, 'click', function(e) {
      this.launchPhotoShowModal(photo.id);
    }.bind(this));

    this._markers[photo.id] = marker;
  },

  removeMarker: function(photo) {
    var marker = this._markers[photo.id];
    marker.setMap(null);
    delete this._markers[photo.id];
  },

  showMarkerInfo: function (event, marker) {
    var photoId = null;
    for (var i in this._markers) {
      if (this._markers[i].title === marker.title) {
        photoId = i;
      }
    }


    var photoUrl = this.collection.getOrFetch(photoId).get('url');
    var iwContent = '<div id="info-window-content"><IMG BORDER="0" ALIGN="Center" STYLE="margin:0; padding:0; max-width: 200px; width: 200px; max-height: 200px" SRC="' + photoUrl + '"></div';
    var infoWindow = new google.maps.InfoWindow({
      //get thumbnail size from couldinary
      content: iwContent
    });

    infoWindow.open(this._map, marker);

    // $(".gutter-item").mThumbnailScroller("scrollTo", $("div").find("[data-id='" + photoId + "']"));
    return infoWindow;
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

  centerAround: function(marker) {
    this._map.panTo(marker.position);
  },

  startBounce: function(id) {
    var marker = this._markers[id];
    marker.setAnimation(google.maps.Animation.BOUNCE);
    marker.setIcon(this.hotIcon);
    this._map.panTo(marker.position);
  },

  stopBounce: function(id) {
    var marker = this._markers[id];
    marker.setAnimation(null);
    marker.setIcon(this.coldIcon);
  },

  launchPhotoShowModal: function(photoId) {
    var photo = this.collection.getOrFetch(photoId);
    var modal = new Shuttr.Views.PhotoShow({ model: photo });
    $('body').append(modal.$el);
    modal.render();
  },

  loadHeatMap: function() {
    var heatmapData = [];
    var photos = this.collection;

    photos.each(function(photo) {
      if (photo.has("lat") && photo.has("long")) {
        var lat = parseFloat(photo.get('lat'));
        var lng = parseFloat(photo.get('long'));
        var dataPoint = new google.maps.LatLng(lat, lng);
        heatmapData.push(dataPoint);
      }
    });


    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      map: this._map
    });

    this.heatmap.setMap(null);



    // this.heatmap = new google.maps.Map(document.getElementById('map-canvas'), {
    //   zoom: 13,
    //   mapTypeId: google.maps.MapTypeId.SATELLITE
    // });
    //
    //
    // this.heatmap = new google.maps.visualization.HeatmapLayer({
    //   data: heatmapData
    // });
    //
    // this.heatmap.setMap(this._map);


  },

  toggleHeatmap: function(e) {
    this.heatmap.setMap(this.heatmap.getMap() ? null : this._map);
}
});
