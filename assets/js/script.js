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

})