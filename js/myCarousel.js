import './carousel.js';

const myCarousel = new Carousel({
    container: document.querySelector('.slider'),
    items: document.querySelectorAll('.slider__item'),
    autoplay: true,
    autoplayTime: 3500
});