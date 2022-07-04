


(function(){

let counter = document.querySelectorAll('.big-head');
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
