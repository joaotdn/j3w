import jQuery from 'jquery';

(function ($) {
    const toggleMenu = $('*[data-toggle-menu]');

    if (toggleMenu.length) {
        toggleMenu.each(function () {
            $(this).on('click', function () {
                $('.menu-mobile').toggleClass('active')
            })
        });
    }
})(jQuery);