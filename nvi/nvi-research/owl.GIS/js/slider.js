$(document).ready(function(){
  $('.slider-item').slick({
    dots: true,
    arrows: false,
  });
});

$(document).ready(function() {
$(".table-container").each(function() {
    let more = $(this).find(".btn--action");
    let hide = $(this).find(".more");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Показать больше" : "Скрыть");
    });
});
});

