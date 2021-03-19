const modalMap = document.querySelector('.modal-map');

const btnMapOpen = document.querySelector('.contacts-map');
const btnMapClose = modalMap.querySelector('.close-button');

btnMapOpen.addEventListener('click', (event) => {
  event.preventDefault();
  modalMap.classList.add('modal-active');
});

btnMapClose.addEventListener('click', () => {
  modalMap.classList.remove('modal-active');
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalMap.classList.contains('modal-active')) {
    modalMap.classList.remove('modal-active');
  }
});
