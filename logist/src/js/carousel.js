$(document).ready(function() {

    $('.gallery-slideshow').owlCarousel({
        items: 4,
        nav: true,
        loop:true,
        dots: false,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:4
            }
        }
    });

    $('.testimonials-slider').owlCarousel({
        items: 1,
        nav: true,
        loop:true,
        dots: false,
        smartSpeed:1000,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
    });

});