function SecretPlot(plotName, latitude, longitude, description, plotSize, produce, blog) {
  this.plotName = plotName;
  this.latitude = latitude;
  this.longitude = longitude;
  this.plotDescription = description;
  this.plotSize = plotSize;
  this.plotProduce = produce;
  this.plotBlog = blog;
}
var secretPlotGCO = new SecretPlot("Gabriel Community Orchard", 45.470266, -122.720072, 'Located adjacent to Gabriel Community Garden at 4151 SW Canby St in Southwest Portland, Gabriel Community Orchard is home to more than 40 mature fruit trees, the perfect orchard for any apple lover. ', 'big', [' apples', ' other'], [{plotter: 'Bob', message:'I love this garden!'},{plotter: 'Tina', message: 'Ya me too!'}]);

var secretPlotPCUCC = new SecretPlot("Parkrose Community United Church of Christ", 45.534277, -122.533966, 'Parkrose Community Orchard is our fifth and newest orchard. Located on the property of Parkrose Community United Church of Christ, it is home to about 30 fruit trees and dozens of understory and native plants.');

var secretPlotSCO = new SecretPlot("Sabin Community Orchard", 45.553035, -122.647525, 'Fourteen new fruit trees were planted in 2010 and 2011, to accompany two existing cherry trees and an apple tree. In 2011 we established under-story plantings around each fruit tree, water catching swales along the slope, sheet mulch, edging, and signs at both entrances.', 'big', [' cherries', ' apples']);

var secretPlotGTCO = new SecretPlot("Green Thumb Community Orchard",45.562162, -122.644807, "Owned by Portland Parks and Recreation, and co-operatively managed by Portland Community Gardens and the Portland Fruit Tree Project, the Green Thumb Orchard is a historic orchard that hosts a great deal of activities. PFTP's Green Thumb Stewards maintain the orchard's trees, and share in the harvest through our harvesting parties.");

var secretPlotFOD = new SecretPlot("Fruits of Diversity Community Orchard", 45.590446, -122.711207, 'Currently, the orchard is home to over 40 fruit trees, dozens of edible shrubs, and countless understory and companion plants and will continue to grow each year! ', ' big', [' fruits', ' edible shrubs' ], [{plotter: 'Bob', message:'I love this garden!'},{plotter: 'Tina', message: 'Ya me too!'}]);




var secretPlots= [secretPlotPCUCC, secretPlotGCO, secretPlotGTCO, secretPlotSCO, secretPlotFOD ];

/// sorts secretPlots Array by latitude to match labels.
secretPlots.sort(function(a, b){
    return a.latitude-b.latitude;
});



////////UI///////////
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
var markers = [marker, marker2];
var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

var infoWindowOptionsFOD = {
    content: secretPlotFOD.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotFOD.plotSize + ' <br>produce: ' + secretPlotFOD.plotProduce,
};
var infoWindowOptionsSCO = {
    content: secretPlotSCO.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotSCO.plotSize + ' <br>produce: ' + secretPlotSCO.plotProduce,
};


var infoWindowFOD = new google.maps.InfoWindow(infoWindowOptionsFOD);
google.maps.event.addListener(marker,'click',function(e){

  infoWindowFOD.open(map, marker);
  $("#plot-title").text(secretPlotFOD.plotName);
  $("#plot-description").text(secretPlotFOD.plotDescription);
  $("#blog-plotter1").text(secretPlotFOD.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotFOD.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotFOD.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotFOD.plotBlog[1].message);
});
var infoWindowSCO = new google.maps.InfoWindow(infoWindowOptionsSCO);
google.maps.event.addListener(marker2,'click',function(e){

  infoWindowSCO.open(map, marker2);
  $("#plot-title").text(infoWindowSCO.content);
$("#plot-description").text("lorem ipsum gardening 2");
});

}
