import jQuery from 'jquery';

(function ($) {
    const toggleMenu = $('*[data-toggle-menu]');

    if (toggleMenu.length) {
        toggleMenu.on('click', function (e) {
            e.preventDefault();
            $('.menu-mobile').toggleClass('active')
        })
    }
})(jQuery);