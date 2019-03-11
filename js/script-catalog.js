'use strict';

var btnAdded2Cart = document.querySelectorAll('.btn-buy');
var modalAdded2Cart = document.querySelector('.modal-added-product');

var popupClose = document.querySelectorAll('.modal-close');

// Обработчик кнопки купить
for (var b = 0; b < btnAdded2Cart.length; b++) {
  btnAdded2Cart[b].addEventListener('click', function (evt) {
    evt.preventDefault();
    modalAdded2Cart.classList.add('modal-show');
  });
}

// Кнопка закрытия для всех модальных окон
for (var i = 0; i < popupClose.length; i++) {
  popupClose[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    this.parentNode.classList.remove('modal-show');
    this.parentNode.classList.remove('modal-error');
    console.log('Закрыл элемент ' + this.parentNode.className);
  });
}
