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


$(document).ready(function(){
  $('.slider-logo').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: "<img src='../base-img/icons/arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../base-img/icons/arrow.svg' class='next' alt='2'>",
  responsive: [
    {
      breakpoint: 1424,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});


$(document).ready(function(){
  $('.case-slider').slick({
    dots: true,
    arrows: true,
    nextArrow: "<img src='../base-img/icons/arrow.svg' class='case-arrow' alt='2'>",
    prevArrow: false
  });
});

