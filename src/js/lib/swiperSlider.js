import Swiper from 'swiper';

const servicesSwiper = new Swiper('.services-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 3,
  pagination: {
    el: '.services-swiper__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.services-swiper__button-next',
    prevEl: '.services-swiper__button-prev',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
});

const imgSwiper = new Swiper('.img-slider-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.img-slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.img-slider__button-next',
    prevEl: '.img-slider__button-prev',
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
      slidesPerColumn: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerColumn: 2,
    },
    1400: {
      slidesPerView: 4,
      slidesPerColumn: 2,
    }
  },
});


