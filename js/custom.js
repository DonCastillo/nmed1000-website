$(document).ready(function(){


    //nav
    $('#menu-icon a img').click(function(){
        $('#nav-links').slideToggle();

        /*if($('ul#nav-links').hasClass("open")){
            $('ul#nav-links').removeClass("open");
        } else {
            $('ul#nav-links').addClass("open");
        }*/

        if($('#nav-links li').hasClass("wow fadeInUp")){
            $('#nav-links li').removeClass("wow fadeInUp");
        } else{
            $('#nav-links li').addClass("wow fadeInUp");
        }

    });



    /*
    $(window).resize(function(){
        if (window.innerWidth > 990){
            if($('ul#nav-links').hasClass("open")){
                $('#nav-links').slideUp();
            } else {

            }

        }
    });*/






    /*$("header").on("click", function(e) {
        e.stopPropagation();
    });
    $("#wrapper").on("click", function() {
        if($('#nav-links').attr)
        $('#nav-links').slideUp();
        $('#nav-links').css("display", "block");
    });
*/




});

    //$('#wrapper').on('click', function (e) {
        //if (e.target.id == "#nav-links") {
            //alert("parent clicked");
      //  }
    //});

    //slide nav up
    //$('#wrapper').on('click', ':not(header)', function(e){
    //$('body').not('#nav-links').click(function(e){
        //e.stopPropagation();
        //e.preventDefault();
        //$('#nav-links').slideUp();
        //alert("s");
        /*if ($('#nav-links').hasClass("menu-vertical")){
            e.stopPropagation();
            $('#nav-links').slideUp();
            $('#nav-links').removeClass("menu-vertical");
        } else{

        }*/
        //$('#nav-links').slideUp();
   // });



