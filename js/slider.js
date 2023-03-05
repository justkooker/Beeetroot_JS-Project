$(document).ready(function () {
    $('.banner').children('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear',
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false,
            }
        }]
    });

    $('.news').find('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 980,
            settings: {
                slidesToShow: 2,
                dots: true,
                arrows: false,
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }  
        }]
    });
});


