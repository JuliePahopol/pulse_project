
$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src = "../icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src = "../icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]

    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('.catalog__tab_active').siblings().removeClass('.catalog__tab_active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
});
// $(document).ready(function() {
 
//     $(".carousel__inner").owlCarousel({
//         navigationText: true, 
//         items: 1,
//         speed: 1200
//     });
   
//   });