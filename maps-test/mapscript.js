function initMap() {

var mapNeighbourhood = {
    center: new google.maps.LatLng(45.590604, -122.711207),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};



var map = new google.maps.Map(document.getElementById('map'), mapNeighbourhood);

var mapFruitsOfDiversity = {
    position: new google.maps.LatLng(45.590604, -122.711207),
    map: map
};

var mapSabinCommunityOrchard = {
    position: new google.maps.LatLng(45.553110, -122.646701),
    map: map
};

var marker = new google.maps.Marker(mapFruitsOfDiversity);
marker.setMap(map);
var marker2 = new google.maps.Marker(mapSabinCommunityOrchard);
marker.setMap(map);

var infoWindowOptionsFOD = {
    content: 'Fruits of Diversity Community Orchard <br>Plot stats: <br>plot size: big <br>fruits: apples '
};
var infoWindowOptionsSCO = {
    content: 'Sabin Community Orchard <br>Plot stats: <br>plot size: big <br>fruits: apples '
};

var infoWindowFOD = new google.maps.InfoWindow(infoWindowOptionsFOD);
google.maps.event.addListener(marker,'click',function(e){

  infoWindowFOD.open(map, marker);

});
var infoWindowSCO = new google.maps.InfoWindow(infoWindowOptionsSCO);
google.maps.event.addListener(marker2,'click',function(e){

  infoWindowSCO.open(map, marker2);

});

}
