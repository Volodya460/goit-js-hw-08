const formEL = document.querySelector(`.feedback-form`);

// console.log(formEL);
const FORMVALUE = 'feedback-form-state';
const savedMessage = localStorage.getItem(FORMVALUE);
const savedMessageParse = JSON.parse(savedMessage);
const formData = {
  message: '',
  email: '',
};

saveFormTextEmail();

formEL.addEventListener(`input`, onInpurGetValue);
formEL.addEventListener('submit', onSubmit);

function onInpurGetValue(eve) {
  formData.message = eve.currentTarget.message.value;
  formData.email = eve.currentTarget.email.value;
  localStorage.setItem(FORMVALUE, JSON.stringify(formData));
}

function saveFormTextEmail(eve) {
  // console.log(savedMessageParse);

  if (savedMessageParse) {
    formEL.email.value = savedMessageParse.email;
    formEL.message.value = savedMessageParse.message;
  }
}

function onSubmit(eve) {
  eve.preventDefault();
  eve.currentTarget.reset();
  console.log(formData);
  localStorage.removeItem(FORMVALUE);
}
