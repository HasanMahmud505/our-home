$(document).ready(function(){

    /**
     * Hamburger starts  
     */
    hamburger = document.querySelector('.hamburger');
nav = document.querySelector('nav');

hamburger.onclick = function(){
    nav.classList.toggle('active')
}
/**
 * Hamburger ends
 */

$('.banner-slider').slick({
    dots: true,
    infinite: true,
    arrow:true,
    speed: 300,
    slidesToShow: 1,
    drag:true,
    adaptiveHeight: true,
    prevArrow: '<div class="slick-arrow prev"><span><i class="fa-solid fa-arrow-left"></i></span></div>',
    nextArrow: '<div class="slick-arrow next"><span><i class="fa-solid fa-arrow-right"></i></span></div>',
});

/**
 * about section start
 */

$('.about-us').magnificPopup({ 
    type: "iframe",
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
      
        patterns: {
          youtube: {
            index: 'youtube.com/',       
            id: 'v=',
      
            src: 'https://www.youtube.com/embed/%id%?autoplay=1'
          },
      
        },
      
        srcAction: 'iframe_src',
      }})

/**
 * Gallery
 */

$(".gl-image-link").magnificPopup({
    type: 'image',
    gallery : {
        enabled : true
    }
})


/**
 * 
 * scroll to top
 */

$(window).scroll(function(){
  if($(this).scrollTop()>100){
    $('#scrollToTop').fadeIn();
  }else{
    $('#scrollToTop').fadeOut();
  }
});
$('#scrollToTop').click(function(){
  $('html, body').animate({
    scrollTop:0
  }, 2000);
})

})