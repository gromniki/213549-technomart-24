window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var btnShowFeedback = document.querySelector('.js-btn-show-modal-feedback');
  var feedbackPopup = document.querySelector('.modal-feedback');
  var feedbackClose = feedbackPopup.querySelector('.modal-close');
  var form = feedbackPopup.querySelector('.modal-form');
  var nameField = feedbackPopup.querySelector('[name=name]');
  var emailField = feedbackPopup.querySelector('[name=email]');
  var commentField = feedbackPopup.querySelector('[name=text]');

  var btnMap = document.querySelector('.js-btn-show-modal-map');
  var mapPopup = document.querySelector('.modal-map');
  var mapClose = mapPopup.querySelector('.modal-close');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }

  var btnAdded2Cart = document.querySelector('.btn-buy');
  var modalAdded2Cart = document.querySelector('.modal-added-product');

  function modalClose(btnClose, popup) {
    btnClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.remove('modal-show');
    });
  }

  btnShowFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add('modal-show');
    modalClose(feedbackClose, feedbackPopup);

    if (storage) {
      nameField.value = storage;
    }

    nameField.focus();
  });

  form.addEventListener('submit', function (evt) {
    if (!nameField.value || !emailField.value || !commentField.value) {
      evt.preventDefault();
      console.log('Нужно заполнить все поля');
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

    modalClose(mapClose, mapPopup);
  });

  // btnAdded2Cart.addEventListener('click', function (evt) {
  //   evt.preventDefault();
  //
  //   modalAdded2Cart.classList.add('modal-show');
  //
  //   modalClose(modalAdded2Cart);
  // });
});



