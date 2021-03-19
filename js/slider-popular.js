const slidesPopular = document.querySelector('.popular-list');
const buttonsPopular = document.querySelector('.popular-section .slider-buttons');

buttonsPopular.addEventListener('click', (event) => {
  const nextButton = event.target.closest('.slider-button');
  if (!nextButton || !nextButton.dataset.num) {
    return;
  }

  const previousSlide = slidesPopular.querySelector('.popular-slide-active');
  const previousButton = buttonsPopular.querySelector('.slider-button-active');
  const nextSlide = slidesPopular.querySelector(`[data-num="${nextButton.dataset.num}"]`);

  if (nextSlide) {
    previousSlide.classList.remove('popular-slide-active');
    previousButton.classList.remove('slider-button-active');

    nextSlide.classList.add('popular-slide-active');
    nextButton.classList.add('slider-button-active');
  }
});
