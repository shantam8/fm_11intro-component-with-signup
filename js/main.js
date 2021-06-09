let inputFirstName = document.querySelector("#inputFieldFirstName");
let inputLastName = document.querySelector("#inputFieldLastName");
let inputEmail = document.querySelector("#inputFieldEmail");
let inputPassword = document.querySelector("#inputFieldPassword");

let errorMsgFirstName = document.querySelector("#errorMsgFirstName");
let errorMsgLastName = document.querySelector("#errorMsgLastName");
let errorMsgEmail = document.querySelector("#errorMsgEmail");
let errorMsgPassword = document.querySelector("#errorMsgPassword");

function checkFirstName() {
  if (!inputFirstName.value == "") {
    inputFirstName.classList.remove("errorInTextField");
    errorMsgFirstName.style.display = "none";
    return true;
  } else {
    inputFirstName.classList.add("errorInTextField");
    errorMsgFirstName.style.display = "block";
    return false;
  }
}

function checkLastName() {
  if (!inputLastName.value == "") {
    inputLastName.classList.remove("errorInTextField");
    errorMsgLastName.style.display = "none";
    return true;
  } else {
    inputLastName.classList.add("errorInTextField");
    errorMsgLastName.style.display = "block";
    return false;
  }
}

function checkEmail() {
  let mailPattern = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

  if (!inputEmail.value == "" && inputEmail.value.match(mailPattern)) {
    inputEmail.classList.remove("errorInTextField");
    errorMsgEmail.style.display = "none";
    return true;
  } else {
    inputEmail.classList.add("errorInTextField");
    errorMsgEmail.style.display = "block";
    return false;
  }
}

function checkPassword() {
  if (!inputPassword.value == "") {
    inputPassword.classList.remove("errorInTextField");
    errorMsgPassword.style.display = "none";
    return true;
  } else {
    inputPassword.classList.add("errorInTextField");
    errorMsgPassword.style.display = "block";
    return false;
  }
}

function checkSubmitForm() {
  if (checkFirstName && checkLastName && checkEmail && checkPassword) {
    console.log("submit data");
  }
}

function init() {
  document
    .querySelector("#submitBtn")
    .addEventListener("click", checkSubmitForm);
}

window.addEventListener("load", init);
