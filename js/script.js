window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  var btnCallFeedback = document.querySelector('.js-btn-show-modal-feedback');
  var modalFeedback = document.querySelector('.modal-feedback');
  var btnClose = document.querySelector('.modal-close');

  //var btnClose = document.querySelector('.');

  function modalClose(modal) {
    btnClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.remove('modal-show');
    });
  }

  btnCallFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();

    modalFeedback.classList.add('modal-show');

    modalClose(modalFeedback);
  });






});



