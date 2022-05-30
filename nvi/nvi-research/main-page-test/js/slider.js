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
        afterLoad: function(index){
          console.log(index == 1);
          
        }
     });
  })