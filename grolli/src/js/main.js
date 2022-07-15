import $ from "jquery";

$(document).ready(function() {
$("#gallery-show").each(function() {
    let more = $(this).find("#gallery-btn-show");
    let hide = $(this).find("#gallery-hid");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть фотографии" ? "Показать больше фотографий" : "Скрыть фотографии");
    });
});
});
