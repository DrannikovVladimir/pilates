'use strict';

var button = document.querySelector('.nav__button');
var menu = document.querySelector('.nav');

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  menu.classList.toggle('nav--active');
});
