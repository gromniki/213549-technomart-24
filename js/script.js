window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var btnShowFeedback = document.querySelector('.js-btn-show-modal-feedback');
  var feedbackPopup = document.querySelector('.modal-feedback');
  var form = feedbackPopup.querySelector('.modal-form');
  var nameField = feedbackPopup.querySelector('[name=name]');
  var emailField = feedbackPopup.querySelector('[name=email]');
  var commentField = feedbackPopup.querySelector('[name=text]');

  var btnMap = document.querySelector('.js-btn-show-modal-map');
  var mapPopup = document.querySelector('.modal-map');

  var popupClose = document.querySelectorAll('.modal-close');

  var btnAdded2Cart = document.querySelector('.btn-buy');
  var modalAdded2Cart = document.querySelector('.modal-added-product');

  /* temp */
  var modals = document.querySelectorAll('.modal');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('name');
    //storage = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

  btnShowFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add('modal-show');

    if (storage) {
      nameField.value = storage;
      emailField.focus();
    } else {
      nameField.focus();
    }
  });

  form.addEventListener('submit', function (evt) {
    if (!nameField.value || !emailField.value || !commentField.value) {
      evt.preventDefault();
      console.log('Нужно заполнить все поля');
      //feedbackPopup.classList.remove("modal-error");
      //feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add('modal-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', nameField.value);
        localStorage.setItem('email', emailField.value);
      }
    }
  });

  btnMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
  });

  for (var i = 0; i < popupClose.length; i++) {
    popupClose[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      this.parentNode.classList.remove('modal-show');
      this.parentNode.classList.remove("modal-error");
      console.log('Закрыл элемент ' + this.parentNode.className);
    });
  }

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedbackPopup.classList.contains('modal-show')) {
        feedbackPopup.classList.remove('modal-show');
        feedbackPopup.classList.remove("modal-error");
      }
    }
  });

  // for (var i = 0; i < modals.length; i++) {
  //   modals[i].addEventListener('keydown', function (evt) {
  //     if (evt.keyCode === 27) {
  //       evt.preventDefault();
  //
  //
  //       if (this.classList.contains('modal-show')) {
  //         this.classList.remove('modal-show');
  //         this.classList.remove("modal-error");
  //       }
  //
  //       /*if (modals[i].classList.contains('modal-show')) {
  //         modals[i].classList.remove('modal-show');
  //         modals[i].classList.remove("modal-error");
  //       }*/
  //     }
  //   });
  // }

  // btnAdded2Cart.addEventListener('click', function (evt) {
  //   evt.preventDefault();
  //
  //   modalAdded2Cart.classList.add('modal-show');
  //
  //   modalClose(modalAdded2Cart);
  // });
});



