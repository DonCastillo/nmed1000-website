$(document).ready(function(){


    //nav
    $('#menu-icon a img').click(function(){
        $('#nav-links').slideToggle();

        if($('#nav-links li').hasClass("wow fadeInUp")){
            $('#nav-links li').removeClass("wow fadeInUp");
        } else{
            $('#nav-links li').addClass("wow fadeInUp");
        }

    });


});



