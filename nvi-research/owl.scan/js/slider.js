$(document).ready(function(){
  $('.slider-item').slick({
    dots: true,
    arrows: false,
  });
});

$(document).ready(function() {
$(".card--txt-box").each(function() {
    let more = $(this).find(".btn--action");
    let hide = $(this).find(".more");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
    });
});
});

$(document).ready(function() {
  $(function() {
  var $menu_popup = $('.menu-popup');
  
  $(".menu-triger, .menu-close").click(function(){
    $menu_popup.slideToggle(300, function(){
      if ($menu_popup.is(':hidden')) {
        $('body').removeClass('body_pointer');
      } else {
        $('body').addClass('body_pointer');
      }         
    });  
    return false;
  });     
  
  $(document).on('click', function(e){
    if (!$(e.target).closest('.menu').length){
      $('body').removeClass('body_pointer');
      $menu_popup.slideUp(300);
    }
  });
});
});
