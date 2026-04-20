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
const closeRegisterBtn = document.querySelector('#js-close-button');
const overlay = document.querySelector('#js-overlay');
const modal = document.querySelector('#js-modal');
const registerForm = document.querySelector('#js-register-form');
const passwordForm = document.querySelector('#password-form');
const repaetPsForm = document.querySelector('#repaet-ps-form');
const completeRgBtn = document.querySelector('#js-complete-register-button');

openRegisterBtn.addEventListener('click', () => {
  modal.classList.add('modal-showed');
  overlay.classList.add('overlay-showed');
});

closeRegisterBtn.addEventListener('click', () => {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('overlay-showed');
});

repaetPsForm.addEventListener('input', () => {
  if (repaetPsForm.value === passwordForm.value) {
    repaetPsForm.setCustomValidity('');
  } else {
    repaetPsForm.setCustomValidity("Пароли разные!")
  }
});

let user;

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (registerForm.checkValidity()) {
    const registerFormData = new FormData(registerForm);
    const objectEntries = Object.fromEntries(registerFormData.entries());
    objectEntries.createdOn = new Date();
    user = objectEntries;
  }
  console.log(user)
});

completeRgBtn.addEventListener('submit', () => {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('overlay-showed');
})

