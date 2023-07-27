$(function () {

    $('.main_box').fullpage({
        responsiveWidth: 700,
    })

    const SkSlide = new Swiper ('.sk_slide', {
        loop: true,
    })

    $('.product_slide').slick ({
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '640px',
        infinite: true,
    })

    $('.slide_btn .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    })
    $('.slide_btn .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    })
})