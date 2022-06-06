
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

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


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




const sCard1 = document.querySelector("#card-1");
const sCard2 = document.querySelector("#card-2");
const sCard3 = document.querySelector("#card-3");
const sCard4 = document.querySelector("#card-4");
const sCard5 = document.querySelector("#card-5");
const sCard6 = document.querySelector("#card-6");
const sCard7 = document.querySelector("#card-7");
const sCard8 = document.querySelector("#card-8");

const sBtn1 = document.querySelector("#btn-1");
const sBtn2 = document.querySelector("#btn-2");
const sBtn3 = document.querySelector("#btn-3");
const sBtn4 = document.querySelector("#btn-4");
const sBtn5 = document.querySelector("#btn-5");
const sBtn6 = document.querySelector("#btn-6");
const sBtn7 = document.querySelector("#btn-7");
const sBtn8 = document.querySelector("#btn-8");

const sBackBtn1 = document.querySelector("#btn-1-back");
const sBackBtn2 = document.querySelector("#btn-2-back");
const sBackBtn3 = document.querySelector("#btn-3-back");
const sBackBtn4 = document.querySelector("#btn-4-back");
const sBackBtn5 = document.querySelector("#btn-5-back");
const sBackBtn6 = document.querySelector("#btn-6-back");
const sBackBtn7 = document.querySelector("#btn-7-back");
const sBackBtn8 = document.querySelector("#btn-8-back");

const numActive = document.querySelector("#num-active");


sBtn1.onclick = function () {
  sCard1.style.display = "none"
  sCard2.style.display = "flex"
  numActive.innerHTML = "2"
  sBackBtn1.style.display = "inline-block"
}

sBtn2.onclick = function () {
  sCard2.style.display = "none"
  sCard3.style.display = "flex"
  numActive.innerHTML = "3"
}

sBtn3.onclick = function () {
  sCard3.style.display = "none"
  sCard4.style.display = "flex"
  numActive.innerHTML = "4"
}

sBtn4.onclick = function () {
  sCard4.style.display = "none"
  sCard5.style.display = "flex"
  numActive.innerHTML = "5"
}

sBtn5.onclick = function () {
  sCard5.style.display = "none"
  sCard6.style.display = "flex"
  numActive.innerHTML = "6"
}

sBtn6.onclick = function () {
  sCard6.style.display = "none"
  sCard7.style.display = "flex"
  numActive.innerHTML = "7"
}

sBtn7.onclick = function () {
  sCard7.style.display = "none"
  sCard8.style.display = "flex"
  numActive.innerHTML = "8"
}

sBtn8.onclick = function () {
  sCard8.style.display = "none"
  sCard1.style.display = "flex"
  numActive.innerHTML = "1"
}

sBackBtn1.onclick = function () {
  sCard1.style.display = "none"
  sCard8.style.display = "flex"
  numActive.innerHTML = "8"
}

sBackBtn2.onclick = function () {
  sCard2.style.display = "none"
  sCard1.style.display = "flex"
  numActive.innerHTML = "1"
}

sBackBtn3.onclick = function () {
  sCard3.style.display = "none"
  sCard2.style.display = "flex"
  numActive.innerHTML = "2"
}

sBackBtn4.onclick = function () {
  sCard4.style.display = "none"
  sCard3.style.display = "flex"
  numActive.innerHTML = "3"
}

sBackBtn5.onclick = function () {
  sCard5.style.display = "none"
  sCard4.style.display = "flex"
  numActive.innerHTML = "4"
}

sBackBtn6.onclick = function () {
  sCard6.style.display = "none"
  sCard5.style.display = "flex"
  numActive.innerHTML = "5"
}

sBackBtn7.onclick = function () {
  sCard7.style.display = "none"
  sCard6.style.display = "flex"
  numActive.innerHTML = "6"
}

sBackBtn8.onclick = function () {
  sCard8.style.display = "none"
  sCard7.style.display = "flex"
  numActive.innerHTML = "7"
}

const indBtn1 = document.querySelector("#btn-ind-1");
const indBtn2 = document.querySelector("#btn-ind-2");
const indBtn3 = document.querySelector("#btn-ind-3");
const indBtn4 = document.querySelector("#btn-ind-4");

const indCard1 = document.querySelector("#card-ind-1");
const indCard2 = document.querySelector("#card-ind-2");
const indCard3 = document.querySelector("#card-ind-3");
const indCard4 = document.querySelector("#card-ind-4");

const bullet1 = document.querySelector("#bullet-1");
const bullet2 = document.querySelector("#bullet-2");
const bullet3 = document.querySelector("#bullet-3");
const bullet4 = document.querySelector("#bullet-4");

const moreCase = document.querySelector("#moreCase");
const lessCase = document.querySelector("#lessCase");
const bullBoxDis = document.querySelector(".bullet-box-dis");
const indCard = document.querySelector(".ind-card"); 

const industryScreen = document.querySelector("#industry"); 





moreCase.onclick = function () {
  bullBoxDis.style.display = "block";
  moreCase.style.display = "none";
  indCard.style.minHeight = 40 + "rem";
  industryScreen.style.marginBottom = 23 + "rem";


}

lessCase.onclick = function () {
  bullBoxDis.style.display = "none";
  moreCase.style.display = "flex";
  indCard.style.minHeight = 100 + "%";
  industryScreen.style.marginBottom = 9 + "rem";
}


indBtn1.onclick = function () {
  indCard1.style.display = "flex";

  indCard2.style.display = "none";
  indCard3.style.display = "none";
  indCard4.style.display = "none";

  indBtn1.style.opacity = "1";
  indBtn2.style.opacity = "0.5";
  indBtn3.style.opacity = "0.5";
  indBtn4.style.opacity = "0.5";

  bullet1.style.color = "#00FF00";
  bullet2.style.color = "#1F1E23";
  bullet3.style.color = "#1F1E23";
  bullet4.style.color = "#1F1E23";

  bullBoxDis.style.display = "none";
  indCard.style.height = 100 + "%";
  moreCase.style.display = "flex";

}

indBtn2.onclick = function () {
  indCard2.style.display = "flex";

  indCard1.style.display = "none";
  indCard3.style.display = "none";
  indCard4.style.display = "none";

  indBtn1.style.opacity = "0.5";
  indBtn2.style.opacity = "1";
  indBtn3.style.opacity = "0.5";
  indBtn4.style.opacity = "0.5";

  bullet1.style.color = "#1F1E23";
  bullet2.style.color = "#00FF00";
  bullet3.style.color = "#1F1E23";
  bullet4.style.color = "#1F1E23";

  bullBoxDis.style.display = "none";
  indCard.style.height = 100 + "%";
  moreCase.style.display = "flex";

}

indBtn3.onclick = function () {
  indCard3.style.display = "flex";

  indCard1.style.display = "none";
  indCard2.style.display = "none";
  indCard4.style.display = "none";


  indBtn1.style.opacity = "0.5";
  indBtn2.style.opacity = "0.5";
  indBtn3.style.opacity = "1";
  indBtn4.style.opacity = "0.5";
  
  bullet1.style.color = "#1F1E23";
  bullet2.style.color = "#1F1E23";
  bullet3.style.color = "#00FF00";
  bullet4.style.color = "#1F1E23";


  bullBoxDis.style.display = "none";
  indCard.style.height = 100 + "%";
  moreCase.style.display = "flex";
}

indBtn4.onclick = function () {
  indCard4.style.display = "flex";

  indCard1.style.display = "none";
  indCard2.style.display = "none";
  indCard3.style.display = "none";

  indBtn1.style.opacity = "0.5";
  indBtn2.style.opacity = "0.5";
  indBtn3.style.opacity = "0.5";
  indBtn4.style.opacity = "1";

  bullet1.style.color = "#1F1E23";
  bullet2.style.color = "#1F1E23";
  bullet3.style.color = "#1F1E23";
  bullet4.style.color = "#00FF00";

  bullBoxDis.style.display = "none";
  indCard.style.height = 100 + "%";
  moreCase.style.display = "flex";
}








const caseTxtHide1 = document.querySelector("#hide-case-1");
const caseTxtHide2 = document.querySelector("#hide-case-2");
const caseTxtHide3 = document.querySelector("#hide-case-3");
const caseTxtHide4 = document.querySelector("#hide-case-4");
const caseTxtHide5 = document.querySelector("#hide-case-5");
const logo = document.querySelector("#logo");



const caseBthMore1 = document.querySelector("#btn-case-1");
const caseBthMore2 = document.querySelector("#btn-case-2");
const caseBthMore3 = document.querySelector("#btn-case-3");
const caseBthMore4 = document.querySelector("#btn-case-4");
const caseBthMore5 = document.querySelector("#btn-case-5");

caseBthMore1.onclick = function () {
  return false;

}
caseBthMore2.onclick = function () {
  return false;
}
caseBthMore3.onclick = function () {
  return false;
}
caseBthMore4.onclick = function () {
  return false;
}
caseBthMore5.onclick = function () {
  return false;
}


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
$(".case-txt").each(function() {
    let more = $(this).find("#btn-case-1");
    let hide = $(this).find("#hide-case-1");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Подробнее" : "Скрыть");
    });
});
});

$(document).ready(function() {
$(".case-txt").each(function() {
    let more = $(this).find("#btn-case-2");
    let hide = $(this).find("#hide-case-2");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Подробнее" : "Скрыть");
    });
});
});

$(document).ready(function() {
$(".case-txt").each(function() {
    let more = $(this).find("#btn-case-3");
    let hide = $(this).find("#hide-case-3");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Подробнее" : "Скрыть");
    });
});
});

$(document).ready(function() {
$(".case-txt").each(function() {
    let more = $(this).find("#btn-case-4");
    let hide = $(this).find("#hide-case-4");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Подробнее" : "Скрыть");
    });
});
});

$(document).ready(function() {
$(".case-txt").each(function() {
    let more = $(this).find("#btn-case-5");
    let hide = $(this).find("#hide-case-5");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Подробнее" : "Скрыть");
    });
});
});




const moreNews = document.querySelector("#moreNews");
const lessNews1 = document.querySelector("#lessNews-1");
const lessNews2 = document.querySelector("#lessNews-2");
const hiddenNews = document.querySelector(".hidden-news");


moreNews.onclick = function () {
  moreNews.style.display = "none";
  lessNews2.style.display = "flex";
  hiddenNews.style.display = "flex";
}

lessNews1.onclick = function () {
  moreNews.style.display = "flex";
  lessNews2.style.display = "none";
  hiddenNews.style.display = "none";
}

lessNews2.onclick = function () {
  moreNews.style.display = "flex";
  lessNews2.style.display = "none";
  hiddenNews.style.display = "none";
}



