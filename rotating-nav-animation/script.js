const open1 = document.querySelector('#open');
const close1 = document.querySelector('#close');
container = document.querySelector('.container');

// open1.addEventListner('click', () => container.classList.add('show-nav'));
// close.addEventListner('click', () => container.classList.remove('show-nav'));

open1.addEventListener('click', () => container.classList.add('show-nav'));
close1.addEventListener('click', () => container.classList.remove('show-nav'))

