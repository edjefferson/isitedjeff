$(document).ajaxComplete(function(){

    $("#result").hide();
    $('#pr2').hide();

    $('#bar1').animate({width: "100%"},1000, "linear", function(){
    
    $('#pr1').fadeOut(function(){$('#pr2').fadeIn(function(){$('#bar2').animate({width: "100%"},1000, "linear");});});
    
    

    
    setTimeout(function() {$('#pr2').fadeOut(function(){$("#result").show();});}, 2000);

  });

  var progresstypes=["Noun sentiment discovery","Cultural reference point derivation","Myers-Briggs Type approximation","Reticulating splines"];




})
