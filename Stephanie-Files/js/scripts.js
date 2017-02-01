$(document).ready(function(){
  $("#addPlot").click(function(event){
    event.preventDefault();
    $("#readyToPlantButton").toggle();

    $("#showForm").show();
    $("#submitPlotButton").click(function(event){
      event.preventDefault();
      $("#plotDetailsForm").show();
      $("#confirmButton").click(function(event){
        event.preventDefault();
        $("#userDetailsForm").show();
        $('html, body').animate({
          scrollTop: $("#userDetailsForm").offset().top
        }, 2000);

      });
    });
  });

});
