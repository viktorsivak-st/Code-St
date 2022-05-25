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

menuOpen.onclick = function () {
  menuHidden.style.display = 'block';
  return false;
}

menuClose.onclick = function () {
  menuHidden.style.display = 'none';
  return false;
}



