function initMap() {
  var fruitsOfDiversity = {lat: 45.590499, lng: -122.711121};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: fruitsOfDiversity
  });
  var marker = new google.maps.Marker({
    position: fruitsOfDiversity,
    map: map
  });
///////copy paste
// var mapOptions = {
//     center: new google.maps.LatLng(45.590604, -122.711207),
//     zoom: 12,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
// };
// var map = new google.maps.Map(document.getElementById('map'), mapOptions);
//
// var markerOptions = {
//     position: new google.maps.LatLng(45.590604, -122.711207),
//     map: map
// };
// var marker = new google.maps.Marker(markerOptions);
// marker.setMap(map);
//
// var infoWindowOptions = {
//     content: 'Moscone Is Here! Fruits of Diversity Community Orchard'
// };
//
// var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
// google.maps.event.addListener(marker,'click',function(e){
//
//   infoWindow.open(map, marker);
//
// });
////copy paste

}
