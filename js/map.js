  
  var cargarPagina = function() {
  if (navigator.geolocation) { 
    // también se puede usar if ("geolocation" in navigator) {}
    navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
  }

  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  $('.button-collapse').sideNav({
      menuWidth: 500, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
  
};

var funcionExito = function(posicion) {
  var lat = posicion.coords.latitude;
  var lon = posicion.coords.longitude;
  var map=  new GMaps({
    div: '#map',
    zoom: 15,
    lat: lat,
    lng: lon,
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false
  });
  map.addMarker({
    lat: lat,
    lng: lon,
    title: 'Lima',
    click: function(e) {
      alert('You clicked in this marker');
    }
  });

  var dir = "";
  var latlng = new google.maps.LatLng(lat, lon);
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({"latLng": latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[0]) {
        dir = results[0].formatted_address;
      } else {
        dir = "No se ha podido obtener ninguna dirección en esas coordenadas.";
      }
    }
    $("#direccion").val(dir);
  });

  $("#destino").click(function(){
    GMaps.geocode({
      address: $('#direccion').val(),
      callback: function(results, status) {
        if (status == 'OK') {
          var latlng = results[0].geometry.location;
          map.setCenter(latlng.lat(), latlng.lng());
          map.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng()
          });

          map.drawRoute({
            origin: [lat, lon],
            destination: [latlng.lat(), latlng.lng()],
            travelMode: 'driving',
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 6
          });
        }
      }
    }); 
  });
};  

var funcionError = function (error) {
  console.log(error);
};



 $(document).ready(cargarPagina);


// --------------------------


