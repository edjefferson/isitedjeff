$(document).ajaxComplete(function(){

    $("#result").hide();

    $('#bar1').animate({width: "100%"},600, "linear", function(){
    
    $('#bar2').animate({width: "100%"},600, "linear");

    setTimeout($("#result").show(), 10000);

  });

  var progresstypes=["Noun sentiment discovery","Cultural reference point derivation","Myers-Briggs Type approximation","Reticulating splines"];




})
