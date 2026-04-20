import { Modal } from "./Modal.js";
import { Form } from "./Form.js"

const registrationModal = new Modal('js-modal');
const registrationForm = new Form('js-register-form');
//Уровень 1:
//4. К Форме, которая прикреплена в футере - добавить логику: email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется. Кнопка "Подписаться" и есть "отправкой формы", при нажатии на которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }
const emailForm = document.querySelector('.footer__form');
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(emailForm);
  const objectEntries = Object.fromEntries(formData.entries());
  console.log(objectEntries);
});

//Уровень 2:
//6. Создать форму для регистрации внутри модального окна.
const openRegisterBtn = document.querySelector('#js-register-button');
const overlay = document.querySelector('#js-overlay');
const passwordForm = document.querySelector('#password-form');
const repaetPsForm = document.querySelector('#repaet-ps-form');
const completeRgBtn = document.querySelector('#js-complete-register-button');

openRegisterBtn.addEventListener('click', () => {
  registrationModal.openModal();
  overlay.classList.add('overlay-showed');
});

repaetPsForm.addEventListener('input', () => {
  if (repaetPsForm.value === passwordForm.value) {
    repaetPsForm.setCustomValidity('');
  } else {
    repaetPsForm.setCustomValidity("Пароли разные!")
  }
});

let user;

registrationForm.formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  if (registrationForm.isValid()) {
    const allValues = registrationForm.getAllValues();
    allValues.createdOn = new Date();
    user = allValues;

    registrationModal.closeModal();
    overlay.classList.remove('overlay-showed');
    registrationForm.resetValues();
  }
  console.log(user)
});
