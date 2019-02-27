window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  var btnShowFeedback = document.querySelector('.js-btn-show-modal-feedback');
  var feedbackPopup = document.querySelector('.modal-feedback');
  var feedbackClose = feedbackPopup.querySelector('.modal-close');

  var btnMap = document.querySelector('.js-btn-show-modal-map');
  var mapPopup = document.querySelector('.modal-map');
  var mapClose = mapPopup.querySelector('.modal-close');

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



