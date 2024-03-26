
$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        slidesToShow: 1,
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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    //в первой строке addClass добавляем active если класс неактивен и наоборот
    //во сторой closest , мы добавляем класс активности тем элементам у которых их нет и наоборот

    $('.catalog-item__link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });

    $('.catalog-item__back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
        //$ - это синоним функции jQuery, которая ищет элементы в 
        //DOM по указанному селектору (в данном случае элемент с id "myElement").
    });
    // this - ссылаемся на каждый элемент который перебираем

    // ----------
    // Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    // $('.button_mini').on('click', function(){
    //     $('.overlay, #order').fadeIn('slow');
    // });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
        //для каждого button_mini под индексом i 
        //по клику выполнять функцию 
        //берем модальное окно с id = 'order' и заменяем содержимое modal__descr на catalog-item__subtitle 
        //для кажого нового элемента i на подходящий
        //eg позволяет получить определенный элемент по порядку
    });

      

    $('#consultation-form').validate(); //В первом случае мы напрямую обращаемся к элементу, у которого есть id="consultation-form". Если смотреть на верстку, то это сама форма:
    // <form id="consultation-form" class="feed-form" action="#">
    $('#consultation form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста введите свое имя",
                minlength: jQuery.validator.format("Введите минимум {0} символа")
            },
            phone: "Пожалуйста введите свой номер телефона",
            email: {
                required: "Пожалуйста введите свою почту",
                email: "Неправильно введен адрес почты"
            }
        }

    }); //Во втором случае мы обращаемся к блоку, у которого есть такой id и внутри него уже ищем форму:
    // <div class="modal" id="consultation">  Это блок, внутри форма:
    // <form class="feed-form feed-form_mt25" action="#">
    $('#order form').validate();



    //у нас есть блок у id= consultation 
    //и внутри есть блок form для котого мы 
    //задаем правила
});