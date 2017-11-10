
(function() {
// Method to change states which works in IE7+ / IE8+
    var btn = document.querySelector('.btn-wrapper');

// asdf
    var toggleState = function(elm, att, one, two) {
        var elmm = document.querySelector(elm);
        elmm.setAttribute(att, elmm.getAttribute(att) === one ? two : one);
    };

// setup
    btn.setAttribute('aria-pressed', 'false');

// // turn active state on or off
//     btn.onclick = function(e) {
//         e.preventDefault();
//         toggleState('.btn-burger', 'data-state', 'off', 'on');
//         toggleState('.btn-wrapper', 'aria-pressed', 'false', 'true');
//         // $(".menu").slideToggle();
//     }

$('.btn-wrapper').on('click',function (e) {
    e.preventDefault();
   $('.btn-burger').toggleClass('btn-burger__cl');

    $(".menu").slideToggle();

})

})();
$(function() {
    // no dragstart img
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });   
});


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


// Options
var options = {
    offset: 110
};

// Create a new instance of Headhesive.js and pass in some options
var header = new Headhesive('.header', options);


// button to top


$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });

});

//popup
$('.popup-with-form').magnificPopup({
    type: 'inline',
    focus: '#name2'
});

//mask input

jQuery(function($){
    $(".phone").mask("+7(999) 999-99-99");    
});






