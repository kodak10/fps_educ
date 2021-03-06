$(document).ready(function () {
  
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        mouveDrag:false,
        autoplay:true,
        nav:true,
        dots:false,
        autoplayTimeout:7500,
        autoplayHoverPause:true,
        
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });
  
});

  
$('.galerie').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  

window.onscroll = function () {

    if (document.documentElement.scrollTop > 40) {
        /*au scrool*/
        document.getElementById("header").style.background = "#0e1532";

        document.getElementById("navbar").style.padding = "2px 0px";
    }
    else {
        /*sans scrool*/
        document.getElementById("header").style.background = "transparent";

        document.getElementById("header").style.padding = "10px 0px";
    }

}
