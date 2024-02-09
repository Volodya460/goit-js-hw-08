const formEL = document.querySelector(`.feedback-form`);
let formData = {};

const FORMVALUE = 'feedback-form-state';
// const savedMessage = localStorage.getItem(FORMVALUE);
// const savedMessageParse = JSON.parse(savedMessage);

formEL.addEventListener(`input`, onInpurGetValue);
formEL.addEventListener('submit', onSubmit);

function onInpurGetValue(eve) {
  // formData.message = eve.currentTarget.message.value;
  // formData.email = eve.currentTarget.email.value;
  formData[eve.target.name] = eve.target.value;

  localStorage.setItem(FORMVALUE, JSON.stringify(formData));
}
savedMessageLocalStorage();
saveFormTextEmail();

function saveFormTextEmail(eve) {
  // console.log(savedMessageParse);
  // if (savedMessageParse) {
  //   formEL.email.value = savedMessageParse.email;
  //   formEL.message.value = savedMessageParse.message;
  // }

  Object.entries(formData).forEach(([name, value]) => {
    formEL[name].value = value;
  });
}

function savedMessageLocalStorage() {
  const savedMessage = localStorage.getItem(FORMVALUE);

  if (savedMessage) {
    try {
      const savedMessageParse = JSON.parse(savedMessage);
      // console.log(savedMessageParse);
      // formData.message = savedMessageParse.message;
      // formData.email = savedMessageParse.email;
      formData = Object.assign(savedMessageParse);

      // console.log(formData);
    } catch (error) {
      console.log(error.name);
    }
  }
}

function onSubmit(eve) {
  eve.preventDefault();
  eve.currentTarget.reset();
  // console.log(formData);
  localStorage.removeItem(FORMVALUE);
}
