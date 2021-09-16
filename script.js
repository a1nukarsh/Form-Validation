console.log("This is a script file");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPhone = false;

// console.log(name, email, phone)

name.addEventListener("blur", () => {
  console.log("Name is blurred.");
  // Validate Name here
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
  let str = name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("The name is valid");
    name.classList.remove("is-invalid");
    validUser = true
  } else {
    console.log("The name is invalid");
    name.classList.add("is-invalid");
    validUser = false
  }
});
email.addEventListener("blur", () => {
  console.log("Email is blurred.");
  // Validate Email here
  let regex = /^([_\-\.a-z0-9]+)@([a-z0-9]+)\.([a-zA-Z]){1,7}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("The email is valid");
    email.classList.remove("is-invalid");
    validEmail = true
  } else {
    console.log("The email is invalid");
    email.classList.add("is-invalid");
    validEmail = false
  }
});
phone.addEventListener("blur", () => {
  console.log("Phone is blurred.");
  // Validate Phone here
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("The phone is valid");
    phone.classList.remove("is-invalid");
    validPhone = true
  } else {
    console.log("The phone is invalid");
    phone.classList.add("is-invalid");
    validPhone = false
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Submit has been clicked");
  console.log(validEmail, validUser, validPhone);

  if (validEmail && validUser && validPhone) {
    console.log("Phone Email and User are valid, submitting the form");
    let success = document.getElementById("success");
    success.classList.add("show");
    fail.classList.remove("show");
  } else {
    console.log("Phone Email and User may not be valid, Try Again");
    let fail = document.getElementById("fail");
    fail.classList.add("show");
    success.classList.remove("show");
  }

});
