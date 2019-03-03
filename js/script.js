window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var btnShowFeedback = document.querySelector('.js-btn-show-modal-feedback');
  var feedbackPopup = document.querySelector('.modal-feedback');

  var btnMap = document.querySelector('.js-btn-show-modal-map');
  var mapPopup = document.querySelector('.modal-map');

  var btnAdded2Cart = document.querySelectorAll('.btn-buy');
  var modalAdded2Cart = document.querySelector('.modal-added-product');

  var popupClose = document.querySelectorAll('.modal-close');

  if (btnShowFeedback != null) {
    var btnPrev = document.querySelector('.js-slide-prev');
    var btnNext = document.querySelector('.js-slide-next');

    console.log(btnPrev);
    console.log(btnNext);

    btnPrev.addEventListener('ckick', function (evt) {
      evt.preventDefault();



    });

    var form = feedbackPopup.querySelector('.modal-form');
    var nameField = feedbackPopup.querySelector('[name=name]');
    var emailField = feedbackPopup.querySelector('[name=email]');
    var commentField = feedbackPopup.querySelector('[name=text]');
    var isStorageSupport = true;
    var storageName = '';
    var storageEmail = '';

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
        console.log('Нужно заполнить все поля');
        //feedbackPopup.classList.remove("modal-error");
        //feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add('modal-error');
      } else {
        if (isStorageSupport) {
          localStorage.setItem('name', nameField.value);
          localStorage.setItem('email', emailField.value);

          //localStorage.setItem('name', nameField.value);
          //localStorage.setItem('email', emailField.value);
        }
      }
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (feedbackPopup.classList.contains('modal-show')) {
          feedbackPopup.classList.remove('modal-show');
          feedbackPopup.classList.remove("modal-error");
        }
      }
    });
  }

  // Показ карты
  if (btnMap != null) {
    btnMap.addEventListener('click', function (evt) {
      evt.preventDefault();
      mapPopup.classList.add('modal-show');
    });
  }

  // Кнопка закрытия для всех модальных окон
  for (var i = 0; i < popupClose.length; i++) {
    popupClose[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      this.parentNode.classList.remove('modal-show');
      this.parentNode.classList.remove("modal-error");
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
});



