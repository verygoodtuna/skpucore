$(function () {

    $('.main_box').fullpage({
        anchors:['main_sk', 'main_product', 'main_technical', 'main_customer', 'main_news', 'main_global', 'footer'],
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

    $('.gnb ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {

            if ($(this).next().size() != 0) {
                e.preventDefault();
            }
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.lnb').stop().slideUp();
        }
    });

    const SkSlide = new Swiper ('.sk_slide', {
        loop: true,
        speed: 1000,
        // autoplay: {
        //     delay: 3000,
        // },
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

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '50px',
                }
            }
            
        ]
    })

    $('.slide_btn .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    })
    $('.slide_btn .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    })

    $('.family_box span').on('click', function () {
        $('.family_box ul').toggleClass('on');
    });

    $('.header .cus .lng').on('click', function () {
        $('.lng ul').toggleClass('on');
    })
})