
$(document).ready(function(){
  $('.slider-item').slick({
    dots: true,
    arrows: false,
  });
});

(function(){

let counter = document.querySelectorAll('.num');
let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
window.addEventListener('scroll', function(){  
  if( limit == counter.length ){ return; }
  
  for(let i = 0; i < counter.length; i++){
    let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
    let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
    if( pos < win && counter[i].dataset.stop === "0" ){
      counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
      let x = 0;
      limit++; // Счетчик будет запущен, увеличиваем переменную на 1
      let int = setInterval(function(){
        // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
        x = x + Math.ceil( counter[i].dataset.to / 50 ); 
        counter[i].innerText = x;
        if( x > counter[i].dataset.to ){
          //Как только досчитали - стираем интервал.
          counter[i].innerText = counter[i].dataset.to;
          clearInterval(int);
        }
      }, 60);
    }
  }
});

})();

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

$(document).ready(function() {
$(".show-more-content").each(function() {
    let more = $(this).find(".btn--action");
    let hide = $(this).find(".more");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
    });
});
});




const docOpen = document.querySelector("#doc-btn");
const docClose = document.querySelector("#doc-close");
const docHidden = document.querySelector(".doc-container");
const bgDoc = document.querySelector(".doc-wrapper");
const nviCon = document.querySelector(".nvi-research");


docOpen.onclick = function () {
  docHidden.style.display = 'block';
  nviCon.style.position = "fixed";
  return false;
}

docClose.onclick = function () {
  docHidden.style.display = 'none';
  nviCon.style.position = "relative";
  return false;
}

bgDoc.onclick = function () {
  docHidden.style.display = 'none';
  nviCon.style.position = "relative";
  return false;
}

const indBtn1 = document.querySelector("#btn-ind-1");
const indBtn2 = document.querySelector("#btn-ind-2");
const indBtn3 = document.querySelector("#btn-ind-3");


const indCard1 = document.querySelector("#card-ind-1");
const indCard2 = document.querySelector("#card-ind-2");
const indCard3 = document.querySelector("#card-ind-3");

const bullet1 = document.querySelector("#bullet-1");
const bullet2 = document.querySelector("#bullet-2");
const bullet3 = document.querySelector("#bullet-3");

const industryScreen = document.querySelector("#industry"); 


indBtn1.onclick = function () {
  indCard1.style.display = "flex";

  indCard2.style.display = "none";
  indCard3.style.display = "none";

  indBtn1.style.opacity = "1";
  indBtn2.style.opacity = "0.5";
  indBtn3.style.opacity = "0.5";


  bullet1.style.color = "#00FF00";
  bullet2.style.color = "#1F1E23";
  bullet3.style.color = "#1F1E23";


  bullBoxDis.style.display = "none";
  indCard.style.height = 100 + "%";
  moreCase.style.display = "flex";

}

indBtn2.onclick = function () {
  indCard2.style.display = "flex";

  indCard1.style.display = "none";
  indCard3.style.display = "none";


  indBtn1.style.opacity = "0.5";
  indBtn2.style.opacity = "1";
  indBtn3.style.opacity = "0.5";


  bullet1.style.color = "#1F1E23";
  bullet2.style.color = "#00FF00";
  bullet3.style.color = "#1F1E23";


  bullBoxDis.style.display = "none";
  indCard.style.height = 100 + "%";
  moreCase.style.display = "flex";

}

indBtn3.onclick = function () {
  indCard3.style.display = "flex";

  indCard1.style.display = "none";
  indCard2.style.display = "none";



  indBtn1.style.opacity = "0.5";
  indBtn2.style.opacity = "0.5";
  indBtn3.style.opacity = "1";

  
  bullet1.style.color = "#1F1E23";
  bullet2.style.color = "#1F1E23";
  bullet3.style.color = "#00FF00";



  bullBoxDis.style.display = "none";
  indCard.style.height = 100 + "%";
  moreCase.style.display = "flex";
}










