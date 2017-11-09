$(function() {
    // no dragstart img
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });   
});

(function() {

    // Method to change states which works in IE7+ / IE8+
    var btn = document.querySelector('.btn-wrapper');

    // asdf
    var toggleState = function(elm, att, one, two) {
        var elm = document.querySelector(elm);
        elm.setAttribute(att, elm.getAttribute(att) === one ? two : one);
    };

    // setup
    btn.setAttribute('aria-pressed', 'false');

    // turn active state on or off
    btn.onclick = function(e) {
        toggleState('.btn-burger', 'data-state', 'off', 'on');
        toggleState('.btn-wrapper', 'aria-pressed', 'false', 'true');
        e.preventDefault();
        $(".menu").slideToggle();
    }

})();
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



