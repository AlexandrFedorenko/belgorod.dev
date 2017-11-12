$('.mainSlider').slick({
    infinite: true,
    slidesToShow: 4,
    arrows:true,
    prevArrow: '<button type="button" class="slidArr arrLeft"><img src="img/arr.png" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slidArr arrRight"><img src="img/arr.png" alt="arrow"></button>',
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});