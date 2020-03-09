		if($(".bg-container-youtube").is(':visible')){

    if($(window).width() >= 1200){

        $('.player').mb_YTPlayer();

    }

    else{

        $(".bg-container-youtube").backstretch([

            "img/slideshow/viz3.jpg",		//-- CHANGE WITH YOUR IMAGE URL

            "img/slideshow/viz3.jpg"

            ],{

            duration:6000,

            fade:'normal'

        });

    }

}



 $('#play-video').on('click', function(ev) {

 

    $("#video")[0].src += "&autoplay=1";

    ev.preventDefault();

 

  });