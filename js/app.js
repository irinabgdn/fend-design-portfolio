var openclose;

openclose = function() {
  return $(".close-button").click(function() {
    $(".nav-bar").toggleClass("open");
    return $(this).toggleClass("open");
  });
};

jQuery(document).ready(function($) {
  return openclose();
});

// $(document).ready(function(){
$('#prj-container').on('click', '.project', function(e) {
        e.preventDefault();
        debugger

        $(this).toggleClass('prj-open');
        } )

// // Navigation freezes when scrolled down

// let navTop = $('nav').offset().top;
// $(window).scroll(function() {
//     let currentScroll = $(window).scrollTop();
//     if (currentScroll >= navTop) {
//         $('nav').classList.toggle("on-top")
//         // $('nav').css({
//         //     position: 'fixed',
//         //     top: '0',
//         //     transform: 'translateY(-200px)'
//         // });
//     } else {
//         $('nav').removeClass("on-top")
//         };
//     })
// })