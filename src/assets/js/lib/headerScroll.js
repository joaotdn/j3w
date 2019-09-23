import $ from 'jquery';

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 160) {
        $('#header, .back-top').addClass('show');
    } else {
        $('#header, .back-top').removeClass('show');
    }
});

// let lastScrollTop = 0;
// $(window).scroll(function(){
//     var st = $(this).scrollTop();
//     if (st > lastScrollTop) {
//         $('#header').removeClass('show');
//     } else if(st <= 200) {
//         $('#header').removeClass('show');
//     } else {
//         $('#header').addClass('show');
//     }
//     lastScrollTop = st;
// });