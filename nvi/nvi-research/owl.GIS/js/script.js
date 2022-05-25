
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

const docBtn = document.querySelector("#btn-doc");
const docImg = document.querySelector("#doc-img");
const coverImg = document.querySelector(".cover--img");
const pointBox = document.querySelector(".point-box");
const coverWrapper = document.querySelector(".cover--wrapper");
const coverHead = document.querySelector("#cover-head");

docBtn.onclick = function () {
  docImg.style.display = docImg.style.display === 'block' ? 'none' : 'block';
  pointBox.style.visibility = pointBox.style.visibility === 'hidden' ? 'visible' : 'hidden';
  coverImg.style.visibility = coverImg.style.visibility === 'hidden' ? 'visible' : 'hidden';

  docBtn.innerHTML = docBtn.innerHTML === 'Закрыть сертификат' ? 'Сертификат правообладания' : 'Закрыть сертификат';
  return false;
}

const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuHidden = document.querySelector(".menu-hidden");

menuOpen.onclick = function () {
  menuHidden.style.display = 'block';
  return false;
}

menuClose.onclick = function () {
  menuHidden.style.display = 'none';
  return false;
}

