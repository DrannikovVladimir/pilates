'use strict';

(function() {
  var slides = document.querySelectorAll('.slider__item');
  var activeSlide = 0;
  var slideInterval = setInterval(nextSlide, 10000);
  var next = document.querySelector('.slider__button--right');
  var previous = document.querySelector('.slider__button--left');
  var switches = document.querySelectorAll('.slider-switches__button');

  function nextSlide() {
    goToSlide(activeSlide + 1);
  }

  function previousSlide() {
    goToSlide(activeSlide - 1);
  }

  function goToSlide(n) {
    slides[activeSlide].className = 'slider__item';
    switches[activeSlide].className = 'slider-switches__button';
    activeSlide = (n + slides.length)%slides.length;
    slides[activeSlide].className = 'slider__item slider__item--active';
    switches[activeSlide].className = 'slider-switches__button active';
  }

  function showSlide() {
    switches.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        var id = this.dataset.slider;
        var content = document.querySelector('.slider__item[data-slider="'+ id +'"]');
        var activeContent = document.querySelector('.slider__item.slider__item--active');
        var activeItem = document.querySelector('button.active');

        activeItem.classList.remove('active');
        item.classList.add('active');
        activeContent.classList.remove('slider__item--active');
        content.classList.add('slider__item--active');
      });
    });
  }

  next.addEventListener('click', function () {
    nextSlide();
  });

  previous.addEventListener('click', function() {
    previousSlide();
  });

  showSlide();
})();
