function SecretPlot(plotName, latitude, longitude, description, plotSize, produce, blog) {
  this.plotName = plotName;
  this.latitude = latitude;
  this.longitude = longitude;
  this.plotDescription = description;
  this.plotSize = plotSize;
  this.plotProduce = produce;
  this.plotBlog = blog;
}


function BlogEntry(plotter, message) {
  this.plotter = plotter;
  this.message = message;
}

var secretPlotGCO = new SecretPlot("Gabriel Community Orchard", 45.470266, -122.720072, 'Located adjacent to Gabriel Community Garden at 4151 SW Canby St in Southwest Portland, Gabriel Community Orchard is home to more than 40 mature fruit trees, the perfect orchard for any apple lover. ', 'big', [' apples', ' other'], [{plotter: 'Bob', message:'Im way down here!'},{plotter: 'Tina', message: 'Ya me too!'}]);

var secretPlotPCUCC = new SecretPlot("Parkrose Community United Church of Christ", 45.534277, -122.533966, 'Parkrose Community Orchard is our fifth and newest orchard. Located on the property of Parkrose Community United Church of Christ, it is home to about 30 fruit trees and dozens of understory and native plants.', 'big',[' apples', ' other'],[{plotter: 'Bob', message:'Mmm native plants!'},{plotter: 'Tina', message: 'Wow!'}]);

var secretPlotSCO = new SecretPlot("Sabin Community Orchard", 45.553035, -122.647525, 'Fourteen new fruit trees were planted in 2010 and 2011, to accompany two existing cherry trees and an apple tree. In 2011 we established under-story plantings around each fruit tree, water catching swales along the slope, sheet mulch, edging, and signs at both entrances.', 'big', [' cherries', ' apples'], [{plotter: 'Steve', message:'I can has cherries!'},{plotter: 'Tina', message: 'Watch our for Ceiling-Cat!'}]);

var secretPlotGTCO = new SecretPlot("Green Thumb Community Orchard",45.562162, -122.644807, "Owned by Portland Parks and Recreation, and co-operatively managed by Portland Community Gardens and the Portland Fruit Tree Project, the Green Thumb Orchard is a historic orchard that hosts a great deal of activities. PFTP's Green Thumb Stewards maintain the orchard's trees, and share in the harvest through our harvesting parties.", 'big', ['fruit'], [{plotter: 'Bob', message:'Im way down here!'},{plotter: 'Tina', message: 'Ya so low!'}]);

var secretPlotFOD = new SecretPlot("Fruits of Diversity Community Orchard", 45.590446, -122.711207, 'Currently, the orchard is home to over 40 fruit trees, dozens of edible shrubs, and countless understory and companion plants and will continue to grow each year! ', ' big', [' fruits', ' edible shrubs' ], [{plotter: 'Bob', message:'I love this garden!'},{plotter: 'Tina', message: 'Ya me too!'}]);

var secretPlotECO = new SecretPlot("Engleston Community Orchard", 42.314182, -71.101638, "Situated on a parcel at 195 Boylston Street, Egleston Community Orchard (ECO) is a neighbor-led effort for sustainable urban agriculture and community green space, promoting environmental justice and community ownership of land in Egleston Square. ECO hopes to continue to engage the full diversity of Egleston Square, including youth, and frequently hosts cultural events and workshops open to the general public. Find out more about ECO.", 'big', [' fruits', ' berries', 'herbs', 'rain water'], [{plotter: 'Carlos', message:'I miss my Boston peeps!'},{plotter: 'Orion', message: 'Come get dirty with us!'}])

var secretPlotBNC = new SecretPlot("Boston Nature Center", 42.288211, -71.101274, "In partnership with the Boston Nature Center, we are building a food forest in stages, focusing on a few centerpiece projects each year that offer valuable educational demonstration opportunities. We have spent this past growing season enriching the health of the soil through sheet mulching and the planting of nitrogen-fixing plants.", 'big', [' fruits', ' berries', 'herbs', 'leafy greens'], [{plotter: 'Carlos', message:'Happy wedding BoBo so sorry I missed it!'},{plotter: 'Bonnie', message: 'Spankings will continue until morale improves!'}])

var secretPlots= [secretPlotPCUCC, secretPlotGCO, secretPlotGTCO, secretPlotSCO, secretPlotFOD, secretPlotECO, secretPlotBNC];

/// sorts secretPlots Array by latitude to match labels.
secretPlots.sort(function(a, b){
    return a.latitude-b.latitude;
});


////////UI///////////

$(document).ready(function() {
  $("#viewmap").hide();

  $("#addPlot").click(function(event){
    event.preventDefault();
    $("#readyToPlantButton").toggle();

    $("#showForm").show();
  });
  //addPlot click

  $("#find-plot-button").click(function() {
    event.preventDefault();
    $("#plot-title").show();
    $("#viewmap").show();
    initMap ();
    console.log("find-plot");
  });
  //findPlot click

  $("#add-plot-button").click(function(){
    event.preventDefault();
    console.log("create-plot");
    $("#plot-title").hide();
    $("#viewmap").hide();
    $(".find-plot-div").hide();
    $("#add-new-plot").show();
  });
  // addPlot click

  $("form#new-plot-submit").submit(function(event) {
    event.preventDefault();
    $("#plot-title").empty();
    $(".find-plot-div").hide();
    $("#blog-plotter1").text("");
    $("#blog-message1").text("");
    $("#blog-plotter2").text("");
    $("#blog-message2").text("");
    var newPlotName = $("#new-plot-name").val();
    var newLatitude = parseFloat($("#new-latitude").val());
    var newLongitude = parseFloat($("#new-longitude").val());
    var newDescription = $("#new-description").val();
    var newPlotSize = $("#new-plot-size").val();
    var newProduce = $("#new-produce").val();
    var newBlogUser = $("#new-blog-user").val();
    var newBlog = $("#new-blog").val();

    var secretPlotNew = new SecretPlot (newPlotName, newLatitude, newLongitude, newDescription, newPlotSize, newProduce, [{plotter: newBlogUser, message: newBlog}]);
       console.log(secretPlotNew);
       secretPlots.push(secretPlotNew);
       // console.log(newPlotBlog);

     $("#plot-title").show();
     $("#viewmap").show();

     // initMap();

     var mapNeighbourhood = {
         center: new google.maps.LatLng(45.590604, -122.711207),
         zoom: 10,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     }
     var map = new google.maps.Map(document.getElementById('viewmap'), mapNeighbourhood);

     var mapNewSecretPlot = {
         position: new google.maps.LatLng(secretPlotNew.latitude, secretPlotNew.longitude),
         map: map
     };

     var markerNew = new google.maps.Marker(mapNewSecretPlot);


     var mapFruitsOfDiversity = {
            position: new google.maps.LatLng(secretPlotFOD.latitude, secretPlotFOD.longitude),
            map: map
        };
        var mapSabinCommunityOrchard = {
            position: new google.maps.LatLng(secretPlotSCO.latitude, secretPlotSCO.longitude),
            map: map
        };
        var mapGabrielCommunityOrchard = {
            position: new google.maps.LatLng(secretPlotGCO.latitude, secretPlotGCO.longitude),
            map: map
        };
        var mapGTCO = {
            position: new google.maps.LatLng(secretPlotGTCO.latitude, secretPlotGTCO.longitude),
            map: map
        };
        var mapPCUCC = {
            position: new google.maps.LatLng(secretPlotPCUCC.latitude, secretPlotPCUCC.longitude),
            map: map
        };



        var markerFOD = new google.maps.Marker(mapFruitsOfDiversity);
        var markerSCO = new google.maps.Marker(mapSabinCommunityOrchard);
        var markerGCO = new google.maps.Marker(mapGabrielCommunityOrchard);
        var markerGTCO = new google.maps.Marker(mapGTCO);
        var markerPCUCC = new google.maps.Marker(mapPCUCC);
        markerGTCO.setMap(map);


        var markers = [markerFOD, markerSCO, markerGCO, markerGTCO, markerPCUCC];

//

        markers.push(markerNew);

     var infoWindowOptionsNew = {
         content: secretPlotNew.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotNew.plotSize + ' <br>produce: ' + secretPlotNew.plotProduce,
     };

     var infoWindowNew = new google.maps.InfoWindow(infoWindowOptionsNew);
     google.maps.event.addListener(markerNew,'click',function(e){
       infoWindowNew.open(map, markerNew);
       $("#blog-plotter1").text("");
       $("#blog-message1").text("");
       $("#blog-plotter2").text("");
       $("#blog-message2").text("");
       $(".find-plot-div").show();
       $("#plot-title").text(secretPlotNew.plotName);
       $("#plot-title2").text(secretPlotNew.plotName);
       $("#plot-description").text(secretPlotNew.plotDescription);
       $("#blog-plotter1").text(secretPlotNew.plotBlog[0].plotter);
       $("#blog-message1").text(secretPlotNew.plotBlog[0].message);
      //  $("#blog-plotter2").text(secretPlotNew.plotBlog[1].plotter);
      //  $("#blog-message2").text(secretPlotNew.plotBlog[1].message);
       $("#plot-size").text(secretPlotNew.plotSize);
       $("#plot-produce").text(secretPlotNew.plotProduce);
     });

    var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    var infoWindowOptionsFOD = {
        content: secretPlotFOD.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotFOD.plotSize + ' <br>produce: ' + secretPlotFOD.plotProduce,
    };
    var infoWindowOptionsSCO = {
        content: secretPlotSCO.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotSCO.plotSize + ' <br>produce: ' + secretPlotSCO.plotProduce,
    };
    var infoWindowOptionsGCO = {
        content: secretPlotGCO.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotGCO.plotSize + ' <br>produce: ' + secretPlotGCO.plotProduce,
    };
    var infoWindowOptionsGTCO = {
        content: secretPlotGTCO.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotGTCO.plotSize + ' <br>produce: ' + secretPlotGTCO.plotProduce,
    };
    var infoWindowOptionsPCUCC = {
        content: secretPlotPCUCC.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotPCUCC.plotSize + ' <br>produce: ' + secretPlotPCUCC.plotProduce,
    };
    var infoWindowFOD = new google.maps.InfoWindow(infoWindowOptionsFOD);
    google.maps.event.addListener(markerFOD,'click',function(e){
      infoWindowFOD.open(map, markerFOD);
      $(".find-plot-div").show();
      $("#plot-title").text(secretPlotFOD.plotName);
      $("#plot-title2").text(secretPlotFOD.plotName);
      $("#plot-description").text(secretPlotFOD.plotDescription);
      $("#blog-plotter1").text(secretPlotFOD.plotBlog[0].plotter);
      $("#blog-message1").text(secretPlotFOD.plotBlog[0].message);
      $("#blog-plotter2").text(secretPlotFOD.plotBlog[1].plotter);
      $("#blog-message2").text(secretPlotFOD.plotBlog[1].message);
      $("#plot-size").text(secretPlotFOD.plotSize);
      $("#plot-produce").text(secretPlotFOD.plotProduce);
    });
    var infoWindowSCO = new google.maps.InfoWindow(infoWindowOptionsSCO);
    google.maps.event.addListener(markerSCO,'click',function(e){
      infoWindowSCO.open(map, markerSCO);
      $(".find-plot-div").show();
      $("#plot-title").text(secretPlotSCO.plotName);
      $("#plot-title2").text(secretPlotSCO.plotName);
      $("#plot-description").text(secretPlotSCO.plotDescription);
      $("#blog-plotter1").text(secretPlotSCO.plotBlog[0].plotter);
      $("#blog-message1").text(secretPlotSCO.plotBlog[0].message);
      $("#blog-plotter2").text(secretPlotSCO.plotBlog[1].plotter);
      $("#blog-message2").text(secretPlotSCO.plotBlog[1].message);
      $("#plot-size").text(secretPlotSCO.plotSize);
      $("#plot-produce").text(secretPlotSCO.plotProduce);
    });
    var infoWindowGCO = new google.maps.InfoWindow(infoWindowOptionsGCO);
    google.maps.event.addListener(markerGCO,'click',function(e){
      infoWindowGCO.open(map, markerGCO);
      $(".find-plot-div").show();
      $("#plot-title").text(secretPlotGCO.plotName);
      $("#plot-title2").text(secretPlotGCO.plotName);
      $("#plot-description").text(secretPlotGCO.plotDescription);
      $("#blog-plotter1").text(secretPlotGCO.plotBlog[0].plotter);
      $("#blog-message1").text(secretPlotGCO.plotBlog[0].message);
      $("#blog-plotter2").text(secretPlotGCO.plotBlog[1].plotter);
      $("#blog-message2").text(secretPlotGCO.plotBlog[1].message);
      $("#plot-size").text(secretPlotGCO.plotSize);
      $("#plot-produce").text(secretPlotGCO.plotProduce);
    });
    var infoWindowGTCO = new google.maps.InfoWindow(infoWindowOptionsGTCO);
    google.maps.event.addListener(markerGTCO,'click',function(e){
      infoWindowGTCO.open(map, markerGTCO);
      $(".find-plot-div").show();
      $("#plot-title").text(secretPlotGTCO.plotName);
      $("#plot-title2").text(secretPlotGTCO.plotName);
      $("#plot-description").text(secretPlotGTCO.plotDescription);
      $("#blog-plotter1").text(secretPlotGTCO.plotBlog[0].plotter);
      $("#blog-message1").text(secretPlotGTCO.plotBlog[0].message);
      $("#blog-plotter2").text(secretPlotGTCO.plotBlog[1].plotter);
      $("#blog-message2").text(secretPlotGTCO.plotBlog[1].message);
      $("#plot-size").text(secretPlotGTCO.plotSize);
      $("#plot-produce").text(secretPlotGTCO.plotProduce);
    });
    var infoWindowPCUCC = new google.maps.InfoWindow(infoWindowOptionsPCUCC);
    google.maps.event.addListener(markerPCUCC,'click',function(e){
      infoWindowPCUCC.open(map, markerPCUCC);
      $(".find-plot-div").show();
      $("#plot-title").text(secretPlotPCUCC.plotName);
      $("#plot-title2").text(secretPlotPCUCC.plotName);
      $("#plot-description").text(secretPlotPCUCC.plotDescription);
      $("#blog-plotter1").text(secretPlotPCUCC.plotBlog[0].plotter);
      $("#blog-message1").text(secretPlotPCUCC.plotBlog[0].message);
      $("#blog-plotter2").text(secretPlotPCUCC.plotBlog[1].plotter);
      $("#blog-message2").text(secretPlotPCUCC.plotBlog[1].message);
      $("#plot-size").text(secretPlotPCUCC.plotSize);
      $("#plot-produce").text(secretPlotPCUCC.plotProduce);
    });





    $("#new-plot-name").val("");
    $("#new-latitude").val("");
    $("#new-longitude").val("");
    $("#new-description").val("");
    $("#new-plot-size").val("");
    $("#new-produce").val("");
    $("#new-blog-user").val("");
    $("#new-blog").val("");


  });
  // form new-plot-submit

  $("#create-profile-button").click(function(){
    event.preventDefault();
    $("#plot-title").hide();
    $("#viewmap").hide();
    console.log("create-profile-button");
  });
  // create-profile-button

  $("#message-board-button").click(function(){
    event.preventDefault();
    $("#plot-title").hide();
    $("#viewmap").hide();
    $(".find-plot-div").hide();
    $("#add-new-plot").hide();
    console.log("comment-on-plot");
    $("#add-new-blog-post").show();


  $("form#new-blog-post-submit").submit(function(event) {
    event.preventDefault();
    $("#plot-title").empty();
    $(".find-plot-div").hide();
    $("#blog-plotter1").text("");
    $("#blog-message1").text("");
    $("#blog-plotter2").text("");
    $("#blog-message2").text("");


    var newBlogPostUser = $("#new-blog-post-user").val();
    var newBlogPost = $("#new-blog-post").val();

    var newPlotBlog = [];
    var blogEntryNew = new BlogEntry (newBlogPostUser, newBlogPost);
    console.log(blogEntryNew);
    newPlotBlog.push(blogEntryNew);
    console.log(newPlotBlog);

    $("#blog-posts").show();



  $("#new-blog-entry").append('<p class="blog-poster">' +
                                blogEntryNew.plotter + '</p>' +
                                '<blockquote class="blog-entry">' + blogEntryNew.message + '</blockquote>'

  );




      // blogEntryNew.plotter.forEach(function(element) {
      //   $("p#blog-entry1").append(blogEntryNew.plotter);
      // });
      // blogEntryNew.message.forEach(function(element) {
      //   $("blockquote#blog-post1").append(blogEntryNew.message);
      // });

      // $("#blog-entry1").text(blogEntryNew.plotter);
      // $("#blog-post1").text(blogEntryNew.message);


      $("#new-blog-post-user").val("");
      $("#new-blog-post").val("");
    });


  });


});

function initMap() {
  document.getElementById('viewmap').style.display="block";
  initialize();
}
function initialize () {
var mapNeighbourhood = {
    center: new google.maps.LatLng(38.151461, -95.076235),
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('viewmap'), mapNeighbourhood);

var mapFruitsOfDiversity = {
    position: new google.maps.LatLng(secretPlotFOD.latitude, secretPlotFOD.longitude),
    map: map
};
var mapSabinCommunityOrchard = {
    position: new google.maps.LatLng(secretPlotSCO.latitude, secretPlotSCO.longitude),
    map: map
};
var mapGabrielCommunityOrchard = {
    position: new google.maps.LatLng(secretPlotGCO.latitude, secretPlotGCO.longitude),
    map: map
};
var mapGTCO = {
    position: new google.maps.LatLng(secretPlotGTCO.latitude, secretPlotGTCO.longitude),
    map: map
};
var mapPCUCC = {
    position: new google.maps.LatLng(secretPlotPCUCC.latitude, secretPlotPCUCC.longitude),
    map: map
};
var mapECO = {
  position: new google.maps.LatLng(secretPlotECO.latitude, secretPlotECO.longitude),
  map: map
}
var mapBNC = {
  position: new google.maps.LatLng(secretPlotBNC.latitude, secretPlotBNC.longitude),
  map: map
}

var markerFOD = new google.maps.Marker(mapFruitsOfDiversity);
var markerSCO = new google.maps.Marker(mapSabinCommunityOrchard);
var markerGCO = new google.maps.Marker(mapGabrielCommunityOrchard);
var markerGTCO = new google.maps.Marker(mapGTCO);
var markerPCUCC = new google.maps.Marker(mapPCUCC);
var markerECO = new google.maps.Marker(mapECO);
var markerBNC = new google.maps.Marker(mapBNC);
// markerGTCO.setMap(map);




var markers = [markerFOD, markerSCO, markerGCO, markerGTCO, markerPCUCC, markerECO, markerBNC];
var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

var infoWindowOptionsFOD = {
    content: secretPlotFOD.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotFOD.plotSize + ' <br>produce: ' + secretPlotFOD.plotProduce,
};
var infoWindowOptionsSCO = {
    content: secretPlotSCO.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotSCO.plotSize + ' <br>produce: ' + secretPlotSCO.plotProduce,
};
var infoWindowOptionsGCO = {
    content: secretPlotGCO.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotGCO.plotSize + ' <br>produce: ' + secretPlotGCO.plotProduce,
};
var infoWindowOptionsGTCO = {
    content: secretPlotGTCO.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotGTCO.plotSize + ' <br>produce: ' + secretPlotGTCO.plotProduce,
};
var infoWindowOptionsPCUCC = {
    content: secretPlotPCUCC.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotPCUCC.plotSize + ' <br>produce: ' + secretPlotPCUCC.plotProduce,
};
var infoWindowOptionsECO = {
    content: secretPlotECO.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotECO.plotSize + ' <br>produce: ' + secretPlotECO.plotProduce,
};
var infoWindowOptionsBNC = {
    content: secretPlotBNC.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotBNC.plotSize + ' <br>produce: ' + secretPlotBNC.plotProduce,
};
var infoWindowFOD = new google.maps.InfoWindow(infoWindowOptionsFOD);
google.maps.event.addListener(markerFOD,'click',function(e){
  infoWindowFOD.open(map, markerFOD);
  $(".find-plot-div").show();
  $("#plot-title").text(secretPlotFOD.plotName);
  $("#plot-title2").text(secretPlotFOD.plotName);
  $("#plot-description").text(secretPlotFOD.plotDescription);
  $("#blog-plotter1").text(secretPlotFOD.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotFOD.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotFOD.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotFOD.plotBlog[1].message);
  $("#plot-size").text(secretPlotFOD.plotSize);
  $("#plot-produce").text(secretPlotFOD.plotProduce);
});
var infoWindowSCO = new google.maps.InfoWindow(infoWindowOptionsSCO);
google.maps.event.addListener(markerSCO,'click',function(e){
  infoWindowSCO.open(map, markerSCO);
  $(".find-plot-div").show();
  $("#plot-title").text(secretPlotSCO.plotName);
  $("#plot-title2").text(secretPlotSCO.plotName);
  $("#plot-description").text(secretPlotSCO.plotDescription);
  $("#blog-plotter1").text(secretPlotSCO.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotSCO.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotSCO.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotSCO.plotBlog[1].message);
  $("#plot-size").text(secretPlotSCO.plotSize);
  $("#plot-produce").text(secretPlotSCO.plotProduce);
});
var infoWindowGCO = new google.maps.InfoWindow(infoWindowOptionsGCO);
google.maps.event.addListener(markerGCO,'click',function(e){
  infoWindowGCO.open(map, markerGCO);
  $(".find-plot-div").show();
  $("#plot-title").text(secretPlotGCO.plotName);
  $("#plot-title2").text(secretPlotGCO.plotName);
  $("#plot-description").text(secretPlotGCO.plotDescription);
  $("#blog-plotter1").text(secretPlotGCO.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotGCO.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotGCO.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotGCO.plotBlog[1].message);
  $("#plot-size").text(secretPlotGCO.plotSize);
  $("#plot-produce").text(secretPlotGCO.plotProduce);
});
var infoWindowGTCO = new google.maps.InfoWindow(infoWindowOptionsGTCO);
google.maps.event.addListener(markerGTCO,'click',function(e){
  infoWindowGTCO.open(map, markerGTCO);
  $(".find-plot-div").show();
  $("#plot-title").text(secretPlotGTCO.plotName);
  $("#plot-title2").text(secretPlotGTCO.plotName);
  $("#plot-description").text(secretPlotGTCO.plotDescription);
  $("#blog-plotter1").text(secretPlotGTCO.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotGTCO.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotGTCO.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotGTCO.plotBlog[1].message);
  $("#plot-size").text(secretPlotGTCO.plotSize);
  $("#plot-produce").text(secretPlotGTCO.plotProduce);
});
var infoWindowPCUCC = new google.maps.InfoWindow(infoWindowOptionsPCUCC);
google.maps.event.addListener(markerPCUCC,'click',function(e){
  infoWindowPCUCC.open(map, markerPCUCC);
  $(".find-plot-div").show();
  $("#plot-title").text(secretPlotPCUCC.plotName);
  $("#plot-title2").text(secretPlotPCUCC.plotName);
  $("#plot-description").text(secretPlotPCUCC.plotDescription);
  $("#blog-plotter1").text(secretPlotPCUCC.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotPCUCC.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotPCUCC.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotPCUCC.plotBlog[1].message);
  $("#plot-size").text(secretPlotPCUCC.plotSize);
  $("#plot-produce").text(secretPlotPCUCC.plotProduce);
});
var infoWindowECO = new google.maps.InfoWindow(infoWindowOptionsECO);
google.maps.event.addListener(markerECO,'click',function(e){
  infoWindowECO.open(map, markerECO);
  $(".find-plot-div").show();
  $("#plot-title").text(secretPlotECO.plotName);
  $("#plot-title2").text(secretPlotECO.plotName);
  $("#plot-description").text(secretPlotECO.plotDescription);
  $("#blog-plotter1").text(secretPlotECO.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotECO.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotECO.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotECO.plotBlog[1].message);
  $("#plot-size").text(secretPlotECO.plotSize);
  $("#plot-produce").text(secretPlotECO.plotProduce);
});
var infoWindowBNC = new google.maps.InfoWindow(infoWindowOptionsBNC);
google.maps.event.addListener(markerBNC,'click',function(e){
  infoWindowBNC.open(map, markerBNC);
  $(".find-plot-div").show();
  $("#plot-title").text(secretPlotBNC.plotName);
  $("#plot-title2").text(secretPlotBNC.plotName);
  $("#plot-description").text(secretPlotBNC.plotDescription);
  $("#blog-plotter1").text(secretPlotBNC.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotBNC.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotBNC.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotBNC.plotBlog[1].message);
  $("#plot-size").text(secretPlotBNC.plotSize);
  $("#plot-produce").text(secretPlotBNC.plotProduce);
});


}
