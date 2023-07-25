$(function () {
    $('.main_box').fullpage({

    })

    const SkSlide = new Swiper ('.sk_slide', {
        loop: true,
    })

    $('.product_slide').slick ({
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '100px',
    })
})