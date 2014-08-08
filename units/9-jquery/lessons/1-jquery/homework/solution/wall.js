$(document).ready(function(){

    $('button').click(function(){
        var post = $('#postText').val();
        
        $('#wall').prepend("<div id='like'>" + post + "<br><div class='like'>Like</div><br><br></div>");
            
        $('.like').click(function(){
            $(this).text("Unlike");
            $(this).toggleClass("unlike");
            
        $('.unlike').click(function(){
            $(this).text("Like");
            $(this).toggleClass("like");

        });
        });
    });
});

