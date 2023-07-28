$(function () {

    $('.main_box').fullpage({
        responsiveWidth: 700,
        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            if (dir == 'down') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        }
    })

    const SkSlide = new Swiper ('.sk_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        parallax: true,
        effect: "fade",
        navigation: {
            nextEl: ".swiper_button .left",
            prevEl: ".swiper_button .right",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })

    $('.product_slide').slick ({
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '600px',
        infinite: true,
    })

    $('.slide_btn .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    })
    $('.slide_btn .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    })

    $('.family_box span').on('click', function () {
        $('.family_box ul').toggleClass('on');
    })
})