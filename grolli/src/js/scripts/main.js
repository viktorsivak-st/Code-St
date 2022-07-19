import $ from "jquery"



let btnGraphic1 = document.querySelector("#btn-graphic-1");
let btnGraphic2 = document.querySelector("#btn-graphic-2");
let graphic1 = document.querySelector("#graphic-1");
let graphic2 = document.querySelector("#graphic-2");

btnGraphic1.onclick = function () {
    graphic1.style.display = "none"
    graphic2.style.display = "flex"
}

btnGraphic2.onclick = function () {
    graphic2.style.display = "none"
    graphic1.style.display = "flex"
}

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

let counter = document.querySelectorAll('.num');
    let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
    window.addEventListener('scroll', function () {
        if (limit == counter.length) {
            return;
        }

        for (let i = 0; i < counter.length; i++) {
            let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
            let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
            if (pos < win && counter[i].dataset.stop === "0") {
                counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
                let x = 0;
                limit++; // Счетчик будет запущен, увеличиваем переменную на 1
                let int = setInterval(function () {
                    // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
                    x = x + Math.ceil(counter[i].dataset.to / 30);
                    counter[i].innerText = x;
                    if (x > counter[i].dataset.to) {
                        //Как только досчитали - стираем интервал.
                        counter[i].innerText = counter[i].dataset.to;
                        clearInterval(int);
                    }
                }, 60);
            }
        }
    });


window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight; 
    let phone = document.querySelector('.phone'); 
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    let num3 = document.querySelector('#num3');
    let graphic1 = document.querySelector('#graphic-1');
    let graphic2 = document.querySelector('#graphic-2');
    phone.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    num1.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 20 + 'px)';
    num2.style.transform = 'translate(-' + x * 80 + 'px, -' + y * 20 + 'px)';
    num3.style.transform = 'translate(-' + x * 120 + 'px, -' + y * 20 + 'px)';
    graphic1.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    graphic2.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';


});





