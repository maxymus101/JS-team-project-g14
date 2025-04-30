import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.work-together-form');
const modal = document.querySelector('#modalBackdrop');
const input = document.querySelector('.work-together-form-input');
const label = document.querySelector('label');
const modalTitle = document.querySelector('.modal-title');
const modalParag = document.querySelector('.modal-description');
const closingBtn = document.querySelector('.close-btn');

form.addEventListener('submit', handleSubmitWork);
closingBtn.addEventListener('click', onHandleClickWork);
input.addEventListener('input', onHandleInputWork);

async function handleSubmitWork(event) {
  event.preventDefault();
  window.localStorage.clear();

  const inputedValue = {
    email: form.elements[0].value,
    message: form.elements[1].value,
  };

  if (inputedValue.email && inputedValue.message) {
    window.localStorage.setItem('MainKey', JSON.stringify(inputedValue));
    try {
      const response = await axios.post(
        'https://portfolio-js.b.goit.study/api/requests',
        {
          email: inputedValue.email,
          comment: inputedValue.message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      form.reset();
      window.localStorage.clear();

      modal.classList.remove('hidden');
      modal.classList.add('backdrop');
      modalParag.textContent = `${response.data.message}`;
      modalTitle.textContent = `${response.data.title}`;
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: `${error.message}`,
        position: 'topRight',
      });
      const getedValues = JSON.parse(window.localStorage.getItem('MainKey'));
      form.elements[0].value = getedValues.email;
      form.elements[1].value = getedValues.message;
    }
  } else {
    iziToast.warning({
      title: 'Caution',
      message: 'The fields should not be empty',

      position: 'topRight',
    });
  }
}

function onHandleInputWork() {
  const email = input.value;

  const re = /^\w+(\.\w+)?@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/;
  if (!re.test(email)) {
    label.classList.add('error');
  } else {
    label.classList.remove('error');
  }
}

function onHandleClickWork() {
  modal.classList.remove('backdrop');
  modal.classList.add('hidden');
}
