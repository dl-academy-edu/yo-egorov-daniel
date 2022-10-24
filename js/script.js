const popup = document.querySelector('.popup-form');
const buttonOpen = document.querySelector('.btn-js');
const buttonClose = document.querySelector('.popup-close');

buttonOpen.addEventListener('click', function() {
   popup.classList.add('open')
})

buttonClose.addEventListener('click', function() {
    popup.classList.remove('open')
 })