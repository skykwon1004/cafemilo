$(function () {





    // to top button
    $(window).on('scroll', function () {
        // 스크롤양을 구함
        var sct = $(window).scrollTop();

        if (sct > 1000) {
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }
    });

    $('.to_top').on('click', function () {
        $('html, body').stop().animate({ scrollTop: 0 }, 600)
    });


    

    AOS.init();
})