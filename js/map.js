  
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
  

  
    
};


var funcionError = function (error) {
  console.log(error);
};

 $(document).ready(cargarPagina);


// var distancia = function() {
//   var distancia = ((google.maps.geometry.spherical.computeDistanceBetween(lat,lon, desLatlon))/1000).toFixed(2);
//   var costo = (2.17*distancia).toFixed(2);
//   alert("The approximate distance is " + distancia + "km" + "\n"
//       + "The approximate cost is $. " + costo);
//   };
// };
// $("#destino").click(function(evento){
//   $(".fondo-opaco").removeClass("none");
//   $(".fondo-opaco").css("display","block");

// });
// $("#go-to").click(travelToAddress);
// $(document).ready(cargarPagina);
  

// var desLatlon;
//   var directionsRenderer;
//   var directionsService;

  
//   var travelToAddress = function() {
//     var destiny = document.getElementById("destiny").value;
//     directionsService = new google.maps.DirectionsService();

//     var geocoder = new google.maps.Geocoder();
//     geocoder.geocode( { "address": destiny}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//           var latitude = results[0].geometry.location.lat();
//           var  longitude = results[0].geometry.location.lng();
//           desLatlon =new google.maps.LatLng(latitude, longitude);
//       } 
//     });

//     var request = {
//         lat: lat,
//         lng: lon,
//         destination: destiny,
//         travelMode: google.maps.DirectionsTravelMode.DRIVING
//     };

//     directionsService.route(request,getRuta);
// };

// var getRuta = function(result, status) {
//     if (status == google.maps.DirectionsStatus.OK) {
//         directionsRenderer.setDirections(result);
//     } else {
//         alert("An error has occurred");
//     }
//     $("#destiny").val("");
//     distancia;