$(document).ready(function(){
  $('.slider-item').slick({
    dots: true,
    arrows: false,
  });
});


$(document).ready(function() {
$(".header").each(function() {
    let more = $(this).find(".menu-btn");
    let hide = $(this).find(".header-more");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Меню" ? "Закрыть" : "Меню");
    });
});
});




$(document).ready(function() {
    $('#NVI-Research').pagepiling({
        anchors: ['welcome', 'about', 'guard', 'scan', 'gis', 'traffic', 'anchortag', 'support', 'hr', 'callback'],
        menu: '#myMenu',
        direction: 'vertical',
        scrollingSpeed: 1000,
        touchSensitivity: 1,
        loopBottom: true,
        loopTop: true,
        easing: 'swing',
        css3: true,
        navigation: false,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,
    });
});


