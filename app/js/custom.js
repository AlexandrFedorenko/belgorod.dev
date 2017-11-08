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




