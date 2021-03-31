$(function () {
    $('.owl-main').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        autoWidth: true,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                autoWidth: false
            }
        }
    });

    $('.owl-bottom').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true
    });

    let dotsWidth = $('.owl-dots').width();

    $('.owl-dots').css({
        marginLeft: '-' + dotsWidth / 2 + 'px'
    });

    $('.search-button').on('click', function(e) {
        e.preventDefault();

        if ($(this).hasClass('on')) {

            if ($('.form-head input').val() === '') {
                $('.form-head input').css({
                    width: 0 + 'px'
                });
                $(this).removeClass('on');
            } else {
                $('.form-head form').submit();
            }
        } else {
            $('.form-head input').css({
                width: 117 + 'px'
            });
            $(this).addClass('on');
        }
    });

    $('.form-email').change(function () {
        if ($(this).find('input').not(':checked')) {
            $(this).find('input[type=submit]').attr('disabled', false);
            $(this).find('input[type=submit]').css({
                backgroundColor: '#121212'
            });
        }
    });

    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 100) {
                $('.scroll-top').css({
                    bottom: 40 + 'px'
                });
            } else if ($(window).scrollTop() === 0) {
                $('.scroll-top').css({
                    bottom: '-' + 999 + 'px'
                });
            }
        });
    });

    $('.scroll-top').on('click', function (e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 400);
    });

    $('.list').on('click', function (e) {
        e.preventDefault();

        $(this).next().slideToggle();

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
        }
    });

    $('.m-menu-button').on('click', function (e) {
        e.preventDefault();

        if ($(this).hasClass('on')) {
            $('.menu-m').css({
                left: '-' + $('.menu-m').width() + 'px'
            });
            $(this).removeClass('on');
        } else {
            $('.menu-m').css({
                left: 0 + 'px'
            });
            $(this).addClass('on');
        }
    });

    $(document).mouseup(function (e) {
        var div = $(".menu-m");
        var button = $('.m-menu-button');
        if (!div.is(e.target) &&
            div.has(e.target).length === 0 && !button.is(e.target) && button.has(e.target).length === 0) {
            $('.menu-m').css({
                left: '-' + $('.menu-m').width() + 'px'
            });
            $('.m-menu-button').removeClass('on');
        }
    });

    $('.form-reviews input[type=checkbox]').click(function () {
        if ($(this).is(':checked')) {
            $('.form-reviews input.link-slide-submit').attr('disabled', false);
        } else {
            $('.form-reviews input.link-slide-submit').attr('disabled', true);
        }
    });

    $(".minus").on('click', e => {
        e.preventDefault();

        let currentVal = $(".numbers").val();
        if (currentVal <= 0) {
            return false;
        } else {
            --currentVal;
            $(".numbers").attr("value", currentVal);
        }
    });

    $(".plus").on('click', e => {
        e.preventDefault();

        var currentVal = $(".numbers").val();
        ++currentVal;
        $(".numbers").attr("value", currentVal);
    });

    $('.img-product').zoom({
        url: 'images/book11.jpg'
    });

    $('.rating i').click(function () {
        $(this).css({
            color: '#b52733'
        });

        $(this).prevAll().css({
            color: '#b52733'
        });

        $(this).nextAll().css({
            color: '#797979'
        });

        var number = $(this).prevAll().length + 1;

        $('.rating').attr('data-rating', number);
    });

    $(function () {
        $("#slider-range").slider({
            range: true,
            max: 21,
            min: 9,
            step: 1,
            value: 9,
            values: [9, 21],
            change: function (e, ui) {
                let valueOne = ui.values[0];
                let valueTwo = ui.values[1];

                $('.start-price').find('i').html(valueOne);
                $('.end-price').find('i').html(valueTwo);
            }
        });
    });

    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 217) {
                $('.block-menu').addClass('block-menu-fixed');
            } else if ($(window).scrollTop() === 0) {
                $('.block-menu').removeClass('block-menu-fixed');
            }
        });
    });
});
