// owl-carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true, 
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1,
        },
    },
})

// mobile nav

