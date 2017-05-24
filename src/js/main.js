$(document).ready(function(){
    $('.slider').slick({
        infinity:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay:false,
        autoplaySpeed:10000,
        vertical:false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots:false
                }
            }]
    });

    $(".scroll").click(function () {
        $('html,body').animate({
            scrollTop: $(".perfection").offset().top
        }, 1500);
    });
});