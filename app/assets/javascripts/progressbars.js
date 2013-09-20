$(document).ajaxComplete(function(){
    var progresstypes=["Calculating average noun sentiment","Deriving cultural reference points","Approximating Myers-Briggs Type","Reticulating splines","Partitioning hashtags","Applying colloquial filters","Assaying content","Dissecting social network pathways","Folding retweets","Segmenting pork statements","Rendering Cleggmania","Squeezing vertexes","Simulating alcohol input","Sequencing regrets"];

    $("#result").hide();
    $('#pr1').hide();
    $('#pr2').hide();
    $('#pr3').hide();
    $('#pr4').hide();
    

    function fade(j,time) {
        setTimeout(function(){
        $('#pr' + j).fadeIn(250);
        $('#bar' + j).delay(100).animate({width: "100%"},900);
        $('#pr' + j).delay(1200).fadeOut();
    },time * (j-1))
         
    }
    timing = 1800;
    i = 1;
    while (i < 5)
        {
        index = Math.floor(Math.random() * progresstypes.length);
        $("#text" + i).text(progresstypes.splice(index,1));
        
        fade(i,timing)
        
        i ++;


};
    setTimeout(function(){$("#result").fadeIn();},timing * 4)





  




})
