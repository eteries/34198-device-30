const slidesAdvantages = document.querySelector('.advantages-list');
const buttonsAdvantages = document.querySelector('.advantages-nav');

buttonsAdvantages.addEventListener('click', (event) => {
  const nextButton = event.target.closest('.advantages-button');
  if (!nextButton || !nextButton.dataset.num) {
    return;
  }

  const previousSlide = slidesAdvantages.querySelector('.advantages-item-active');
  const previousButton = buttonsAdvantages.querySelector('.advantages-button-active');
  const nextSlide = slidesAdvantages.querySelector(`[data-num="${nextButton.dataset.num}"]`);

  if (nextSlide) {
    previousSlide.classList.remove('advantages-item-active');
    previousButton.classList.remove('advantages-button-active');

    nextSlide.classList.add('advantages-item-active');
    nextButton.classList.add('advantages-button-active');
  }
});
