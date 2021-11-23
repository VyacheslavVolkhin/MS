$(document).ready(function() {

    //phone masked
    $('input[type="tel"]').mask("+7 (999) 999-99-99", {placeholder: "+7 (___) ___-__-__"});
    $('input[type="tel"]').on('click', function () {
        $(this).setCursorPosition(4);
    })
    $.fn.setCursorPosition = function (pos) {
        this.each(function (index, elem) {
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        });
        return this;
    };

    //popup block
    $('.js-popup-wrap .js-btn-toggle').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('menu-show');
        } else {
            $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
            $(this).addClass('active');
            if ($(this).parent().hasClass('main-menu-wrap')) {
                $('body').addClass('menu-show');
            }
        }
        return false;
    })
    $('.js-popup-wrap .js-btn-close').on('click', function () {
        $(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
        $('body').removeClass('menu-show');
        return false;
    })
    $(document).click(function (event) {
        if ($(event.target).closest(".js-popup-block").length) return;
        $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
        $('body').removeClass('menu-show');
        event.stopPropagation();
    });
    $('.js-popup-wrap').each(function () {
        if ($(this).hasClass('js-popup-select')) {
            // alert(1)
            if ($(this).find('.js-popup-block').find('.active').length > 0) {
            } else {
                $(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
            }
            var currentSelect = $(this).find('.js-popup-block').find('.active').html();
            $(this).find('.js-btn-toggle').html(currentSelect);
        }
    })
    $('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function () {
        if ($(this).hasClass('active')) {
        } else {
            $(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
            $(this).addClass('active');
        }
        $('.js-popup-wrap').each(function () {
            if ($(this).hasClass('js-popup-select')) {
                if ($(this).find('.js-popup-block').find('.active').length > 0) {
                } else {
                    $(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
                }
                var currentSelect = $(this).find('.js-popup-block').find('.active').html();
                $(this).find('.js-btn-toggle').html(currentSelect);
            }
        })
        $(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
        return false;
    })

    //tabs
    $('.js-tabs-nav').each(function () {
        $('.js-tab-block[data-tab*="' + $(this).find('.active').attr('data-tab') + '"]').addClass('active');
    })
    $('.js-tab-title').each(function () {
        if ($(this).hasClass('active')) {
            $(this).next('.js-tab-content').show(0);
        }
    })
    $('.js-tabs-nav li a').on('click', function () {
        if ($(this).hasClass('active')) {
        } else {
            $('.js-tab-block').removeClass('active');
            $(this).parents('.js-tabs-nav').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tabs-nav').each(function () {
                $('.js-tab-block[data-tab*="' + $(this).find('.active').attr('data-tab') + '"]').addClass('active');
            })
        }
        return false;
    })
    $('.js-tab-title').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').next('.js-tab-content').slideUp(200);
        } else {
            $(this).addClass('active').next('.js-tab-content').slideDown(200);
        }
    })


    //datepicker
    $('.js-datepicker').datepicker({
        dateFormat: 'dd.mm.yy',
        dayNames: ["Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        firstDay: 1
    });


    //item-video
    $('.js-btn-video').on('click', function () {
        let videoURL = $(this).parent('.item-video').attr('data-video');
        $(this).parents('.item-video').addClass('active');
        $(this).parents('.item-video').append('<iframe width="100%" height="100%" src="' + videoURL + '" frameborder="0" allowfullscreen></iframe>')
        return false;
    })


    //file input 
    $('.js-field-file .js-file-button').on('click', function () {
        $(this).parent().find('input').click();
        return false;
    })


    //text toggle
    $('.js-text-toggle').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).parent().find('.js-text-hidden').slideUp(200);
            $(this).removeClass('active');
        } else {
            $(this).parent().find('.js-text-hidden').slideDown(200);
            $(this).addClass('active');
        }
        return false;
    })


    //news-slider-box
    if (!!$('.news-slider-box').offset()) {
        $('.news-slider-box .slider').slick({
            dots: false,
            slidesToShow: 3,
            variableWidth: false,
            infinite: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: true,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
            ]
        });
    }


    //tiles-slider-box
    if (!!$('.tiles-slider-box').offset()) {
        $('.tiles-slider-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            infinite: false,
            variableWidth: true,
            slidesToShow: 1,
            prevArrow: false,
            nextArrow: false,
            /*responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        variableWidth: true,
                        slidesToShow: 1,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
            ]*/
        });
    }

    //info-slider-box
    if (!!$('.info-slider-box').offset()) {
        $('.info-slider-box .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            prevArrow: false,
            nextArrow: false,
        });
    }

    //main-slider-box
    if (!!$('.main-slider-box').offset()) {
        $('.main-slider-box .slider').slick({
            dots: true,
            slidesToShow: 1,
            infinite: true,
            variableWidth: false,
            prevArrow: false,
            nextArrow: false,
            adaptiveHeight: true,
        });
    }


    //directions-box
    if (!!$('.directions-box').offset()) {
        $('.directions-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-small ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-small ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }


    //tiles-icons-box
    if (!!$('.tiles-icons-box').offset()) {
        $('.tiles-icons-box .slider').slick({
            dots: false,
            slidesToShow: 6,
            variableWidth: false,
            infinite: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
        $(".tiles-icons-box .js-slider-nav .ico-arrow-prev").click(function () {
            $('.tiles-icons-box .slider').slick('slickPrev');
            return false;
        });
        $(".tiles-icons-box .js-slider-nav .ico-arrow-next").click(function () {
            $('.tiles-icons-box .slider').slick('slickNext');
            return false;
        });
    }


    //files-slider-box
    if (!!$('.files-slider-box').offset()) {
        $('.files-slider-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
        $(".files-slider-box .js-slider-nav .ico-arrow-prev").click(function () {
            $('.files-slider-box .slider').slick('slickPrev');
            return false;
        });
        $(".files-slider-box .js-slider-nav .ico-arrow-next").click(function () {
            $('.files-slider-box .slider').slick('slickNext');
            return false;
        });
    }


    //gallery-slider-box
    if (!!$('.gallery-slider-box').offset()) {
        $('.gallery-slider-box .slider').slick({
            dots: false,
            slidesToShow: 3,
            variableWidth: false,
            infinite: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-light ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-light ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }

    //teams-slider-box
    if (!!$('.teams-slider-box').offset()) {
        $('.teams-slider-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
        $(".teams-slider-box .js-slider-nav .ico-arrow-prev").click(function () {
            $('.teams-slider-box .slider').slick('slickPrev');
            return false;
        });
        $(".teams-slider-box .js-slider-nav .ico-arrow-next").click(function () {
            $('.teams-slider-box .slider').slick('slickNext');
            return false;
        });
    }

    //logos-slider-box
    if (!!$('.logos-slider-box').offset()) {
        $('.logos-slider-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
        $(".logos-slider-box .js-slider-nav .ico-arrow-prev").click(function () {
            $('.logos-slider-box .slider').slick('slickPrev');
            return false;
        });
        $(".logos-slider-box .js-slider-nav .ico-arrow-next").click(function () {
            $('.logos-slider-box .slider').slick('slickNext');
            return false;
        });
    }


    if (!!$('#timer').offset()) {
        $("#timer").countdown("2022/01/01", function(event) {
            $(this).html(
                event.strftime(''
                    + '<span class="timer-count-wrap"><span>%D</span>Дней</span> '
                    + '<span class="timer-count-wrap"><span>%H</span> Часов </span>'
                    + '<span class="timer-count-wrap"><span>%M</span> Минут </span>'
                    + '<span class="timer-count-wrap"><span>%S</span> Секунд </span>')
                );
            })
    }

});


