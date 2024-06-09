const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu_close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills_item-counter');
const lines = document.querySelectorAll('.skills_item-line span');

/* console.log(counters); */

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML; /* lines(span) добавляем стиль ширину который равен 
    ,,*/
});
