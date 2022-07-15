$(document).ready(function() {

$('.count').each(function () {
   $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
     duration: 8000,
     easing: 'swing',
     step: function (now) {
        $(this).text(Math.ceil(now));
     }
    });
});
});

let big = document.querySelector('#big');
let medium = document.querySelector('#medium');
let smallLeft = document.querySelector('#small-left');
let smallRight = document.querySelector('#small-right');
let smallTop = document.querySelector('#small-top');

window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    big.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    medium.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)';
    smallLeft.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    smallRight.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    smallTop.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
});




const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuHidden = document.querySelector(".menu-hidden");
const menuBg = document.querySelector(".menu-bg");

menuOpen.onclick = function () {
  menuHidden.style.display = 'block';
  return false;
}

menuClose.onclick = function () {
  menuHidden.style.display = 'none';
  return false;
}

menuBg.onclick = function () {
  menuHidden.style.display = 'none';
  return false;
}



$(document).ready(function(){
  $('.slider-item').slick({
    dots: true,
    arrows: false,
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



