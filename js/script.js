const poup = document.querySelector('.poup-form');
const buttonOpen = document.querySelector('.btn-js');
const buttonClose = document.querySelector('.popup-close');

buttonOpen.addEventListener('click', function() {
   poup.classList.add('open')
})

buttonClose.addEventListener('click', function() {
    poup.classList.remove('open')
 })
 