'use strict';

var btnShowFeedback = document.querySelector('.js-btn-show-modal-feedback');
var feedbackPopup = document.querySelector('.modal-feedback');
var form = feedbackPopup.querySelector('.modal-form');
var nameField = feedbackPopup.querySelector('[name=name]');
var emailField = feedbackPopup.querySelector('[name=email]');
var commentField = feedbackPopup.querySelector('[name=text]');
var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

var btnMap = document.querySelector('.js-btn-show-modal-map');
var mapPopup = document.querySelector('.modal-map');

var btnAdded2Cart = document.querySelectorAll('.btn-buy');
var modalAdded2Cart = document.querySelector('.modal-added-product');

var popupClose = document.querySelectorAll('.modal-close');

var btnPrev = document.querySelector('.js-slide-prev');
var btnNext = document.querySelector('.js-slide-next');
var toggle = document.querySelectorAll('input[name=toggle]');


// Стрелки слайдера
btnPrev.addEventListener('click', function (evt) {
  evt.preventDefault();
  changeSlide(toggle, 'prev');
});

btnNext.addEventListener('click', function (evt) {
  evt.preventDefault();
  changeSlide(toggle, 'next');
});

function changeSlide(slider, direct) {
  var nextSlide = 0;
  for (var i = 0; i < slider.length; i++) {
    if (slider[i].checked) {
      nextSlide = i;
      if (direct == 'next' && i < slider.length - 1) nextSlide++;
      if (direct == 'prev' && i > 0) nextSlide--;
    }
  }

  slider[nextSlide].checked = true;
}


// Форма обратной связи
try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

btnShowFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('modal-show');

  if (storageName && !emailField) {
    nameField.value = storageName;
    emailField.focus();
  } else if (storageEmail && storageName) {
    nameField.value = storageName;
    emailField.value = storageEmail;
    commentField.focus();
  } else {
    nameField.focus();
  }
});

form.addEventListener('submit', function (evt) {
  if (!nameField.value || !emailField.value || !commentField.value) {
    evt.preventDefault();
    feedbackPopup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', nameField.value);
      localStorage.setItem('email', emailField.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains('modal-show')) {
      feedbackPopup.classList.remove('modal-show');
      feedbackPopup.classList.remove('modal-error');
    }
  }
});


// Показ карты
btnMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});


// Кнопка закрытия для всех модальных окон
for (var i = 0; i < popupClose.length; i++) {
  popupClose[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    this.parentNode.classList.remove('modal-show');
    this.parentNode.classList.remove('modal-error');
    console.log('Закрыл элемент ' + this.parentNode.className);
  });
}


// Обработчик кнопки купить
for (var b = 0; b < btnAdded2Cart.length; b++) {
  btnAdded2Cart[b].addEventListener('click', function (evt) {
    evt.preventDefault();
    modalAdded2Cart.classList.add('modal-show');
  });
}
