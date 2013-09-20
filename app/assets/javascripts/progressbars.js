$(document).ajaxComplete(function(){
    var progresstypes=["Calculating average noun sentiment","Deriving cultural reference points","Approximating Myers-Briggs Type","Reticulating splines","Partitioning hashtags","Applying colloquial filters","Assaying content","Dissecting social network pathways","Folding retweets","Segmenting pork statements","Rendering Cleggmania","Squeezing vertexes","Simulating alcohol input","Sequencing regrets"];

    $("#result").hide();
    $('#pr2').hide();
    $('#pr3').hide();
    $('#pr4').hide();
    i = 1

    while (i < 5)
        {
        index = Math.floor(Math.random() * progresstypes.length);
        $("#text" + i).text(progresstypes.splice(index,1));
        i = i + 1;
        }
    
   
    var timing = 1200


    $('#bar1').animate({width: "100%"},timing, "swing", function(){
    
    $('#pr1').fadeOut(function(){$('#pr2').fadeIn(function(){$('#bar2').animate({width: "100%"},timing, "swing",function(){


        $('#pr2').fadeOut(function(){$('#pr3').fadeIn(function(){$('#bar3').animate({width: "100%"},timing, "swing",

            function(){

                $('#pr3').fadeOut(function(){$('#pr4').fadeIn(function(){$('#bar4').animate({width: "100%"},timing, "swing",function(){


$('#pr4').fadeOut(function(){$("#result").fadeIn();})


                }




                    )})});

            }


            )})});




    }


        );});});
    
    

    

  });

  




})
