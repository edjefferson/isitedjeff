// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.progressbar
//= require turbolinks
//= require_tree .
$(function() {
    $("#result").hide();
    var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( "Personality Analysis:" + progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Personality Analysis Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 1 );
 
      if ( val < 99 ) {
        setTimeout( progress, 50 );
      }
    }
 
    setTimeout( progress, 0 );
  });
  $(function() {
    var progressbar = $( "#progressbar2" ),
      progressLabel = $( ".progress-label2" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( "Reticulating Splines:" + progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Reticulating Splines Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 1 );
 
      if ( val < 99 ) {
        setTimeout( progress, 50 );
      }

      else
      {

        $("#result").show();
      }

    }
 
    setTimeout( progress, 5500 );


  });