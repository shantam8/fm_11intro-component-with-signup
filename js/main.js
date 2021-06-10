let inputFirstName = document.querySelector("#inputFieldFirstName");
let inputLastName = document.querySelector("#inputFieldLastName");
let inputEmail = document.querySelector("#inputFieldEmail");
let inputPassword = document.querySelector("#inputFieldPassword");

let errorMsgFirstName = document.querySelector("#errorMsgFirstName");
let errorMsgLastName = document.querySelector("#errorMsgLastName");
let errorMsgEmail = document.querySelector("#errorMsgEmail");
let errorMsgPassword = document.querySelector("#errorMsgPassword");

let formCorrect = true;

function checkFirstName() {
  console.log("1");
  if (!inputFirstName.value == "") {
    inputFirstName.classList.remove("errorInTextField");
    errorMsgFirstName.style.display = "none";
  } else {
    inputFirstName.classList.add("errorInTextField");
    errorMsgFirstName.style.display = "block";
    formCorrect = false;
  }
}

function checkLastName() {
  console.log("2");
  if (!inputLastName.value == "") {
    inputLastName.classList.remove("errorInTextField");
    errorMsgLastName.style.display = "none";
  } else {
    inputLastName.classList.add("errorInTextField");
    errorMsgLastName.style.display = "block";
    formCorrect = false;
  }
}

function checkEmail() {
  console.log("3");
  let mailPattern = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

  if (!inputEmail.value == "" && inputEmail.value.match(mailPattern)) {
    inputEmail.classList.remove("errorInTextField");
    errorMsgEmail.style.display = "none";
  } else {
    inputEmail.classList.add("errorInTextField");
    errorMsgEmail.style.display = "block";
    formCorrect = false;
  }
}

function checkPassword() {
  console.log("4");
  if (!inputPassword.value == "") {
    inputPassword.classList.remove("errorInTextField");
    errorMsgPassword.style.display = "none";
  } else {
    inputPassword.classList.add("errorInTextField");
    errorMsgPassword.style.display = "block";
    formCorrect = false;
  }
}

function checkSubmitForm() {
  formCorrect = true;
  checkFirstName();
  checkLastName();
  checkEmail();
  checkPassword();
  if (formCorrect) {
    console.log("submit data");
  }
}

function init() {
  console.log("dsafdfs");
  document
    .querySelector("#submitBtn")
    .addEventListener("click", checkSubmitForm);
}

window.addEventListener("load", init);
