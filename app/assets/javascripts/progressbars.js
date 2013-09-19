$(document).ajaxComplete(function(){

    $("#result").hide();

    

    function barprogress(name,time,css1,css2){

    var progressbar = $( css1 ),
      progressLabel = $( css2 );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( name + progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( name + " Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 1 );
 
      if ( val < 99 ) {
        setTimeout( progress, 10 );
      }
    }
 
    setTimeout( progress, time );

  }

  function showresult() {
    $("#result").show();
  }
  var progresstypes=["Noun sentiment discovery","Cultural reference point derivation","Myers-Briggs Type approximation","Reticulating splines"];

  var x = 0

  while (x < 4){

    barprogress(progresstypes[x] + ":",850 + (x * 1500),"#progressbar" + x,".progress-label" + x);
  x = x +1
}
  setTimeout( showresult, 6850 );

})
