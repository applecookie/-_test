$(document).ready(function () {
    var currentIndex;
    var slideCount;
    var timerId;
    var prev = function () {
        slideSelect(currentIndex - 1);
    };
    var next = function () {
        slideSelect(currentIndex + 1);
    };

    function tick() {
        timerId = setTimeout(
            function () {
                next();
                tick();
            },
            10000
        );
    }
    function resetTick() {
        clearTimeout(timerId);
        tick();
    }

    function addFakeSlides() {
        var firstPreview = $('.slider__preview:first-child');
        var lastPreview = $('.slider__preview:last-child');
        $('.slider__previews').append(firstPreview[0].outerHTML).prepend(lastPreview[0].outerHTML);
        var firstPost = $('.slider__post:first-child');
        var lastPost = $('.slider__post:last-child');
        $('.slider__posts').append(firstPost[0].outerHTML).prepend(lastPost[0].outerHTML);
    }

    function addControls() {
        var length = $('.slider .slider__preview').length - 2;
        var str = '';
        for (i = 0; i < length; i++) {
            str = str + '<a href="javascript:void(0);" class="slider__control"></a>';
        }
        $('.slider__controls').html(str);
        slideCount = length;
    }

    function slideSelect(index) {
        if (index === slideCount) {
            index = 0;
        } else if (index === -1) {
            index = slideCount - 1;
        }
        currentIndex = index;

        var controls = $('.slider__control');
        controls.removeClass('slider__control_active').eq(index).addClass('slider__control_active');

        index++;
        var posts = $('.slider__post');
        posts.removeClass('slider__post_active').eq(index).addClass('slider__post_active');
        var previews = $('.slider__preview');
        previews.removeClass('slider__preview_active').eq(index).addClass('slider__preview_active');
        checkSlidePosition(index);
    }

    function checkSlidePosition(index) {
        var width = $('.slider__preview').outerWidth();
        if ($(window).width() < 1024) {
            $('.slider .slider__preview, .slider .slider__post').css('transform', 'translateX(' + (-(width * index) + 45) + 'px)');
        }
        else {
            $('.slider__preview, .slider__post').css('transform', '');
        }
    }

    addFakeSlides();

    addControls();

    slideSelect(0);

    tick();

    $(window).resize(function () {
        checkSlidePosition(currentIndex + 1);
    });

    $('.slider__post').on('click', function () {
        var index = $('.slider__post').index(this) - 1;
        slideSelect(index);
        if ($(window).width() < 1024) {
            $('body').addClass('popup-opened');
            $('.slider__popup').html($('.slider__preview_active')[0].outerHTML)
                .find('.slider__preview').css('transform', '').prepend('<button class="btn popup__btn_close" type="button"></button>');
            clearTimeout(timerId);
        }
    });

    $('.slider__popup').on('click', '.popup__btn_close', function () {
        $('body').removeClass('popup-opened');
        resetTick();
    });

    $('.slider__control').on('click', function () {
        resetTick();
        var index = $('.slider__control').index(this);
        slideSelect(index);
    });

    $('.slider__btn_prev').on('click', function () {
        resetTick();
        prev();
    });
    $('.slider__btn_next').on('click', function () {
        resetTick();
        next();
    });
});