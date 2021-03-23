const modalContacts = document.querySelector('.modal-form');
const formContacts = modalContacts.querySelector('.contact-form');

const nameInput = formContacts.querySelector('[name=contact-name]');
const eMailInput = formContacts.querySelector('[name=contact-email]');
const messageInput = formContacts.querySelector('[name=contact-message]');

const btnContactsOpen = document.querySelector('.button-contacts');
const btnContactsClose = modalContacts.querySelector('.close-button');

let isStorageSupport = true;
let storedName = '';
let storedEMail = '';

try {
  storedName = localStorage.getItem('name');
  storedEMail = localStorage.getItem('email');
} catch (error) {
  isStorageSupport = false;
}

btnContactsOpen.addEventListener('click', (event) => {
  event.preventDefault();
  modalContacts.classList.add('modal-active');

  messageInput.focus();
  storedEMail ?
    eMailInput.value = storedEMail
    : eMailInput.focus();
  storedName ?
    nameInput.value = storedName
    : nameInput.focus();
});

formContacts.addEventListener('submit', (event) => {
  if (!nameInput.value || !eMailInput.value) {
    event.preventDefault();
    modalContacts.classList.remove("modal-error");

    void modalContacts.offsetWidth; // restart animation
    modalContacts.classList.add("modal-error");
    return;
  }

  if (isStorageSupport) {
    window.localStorage.setItem('name', nameInput.value);
    window.localStorage.setItem('email', eMailInput.value);
  }
});

function closeModal() {
  modalContacts.classList.remove('modal-active');
  modalContacts.classList.remove("modal-error");
}

btnContactsClose.addEventListener('click', () => closeModal());

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalContacts.classList.contains('modal-active')) {
    closeModal();
  }
});
