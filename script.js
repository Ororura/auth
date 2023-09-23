"use strict";
const loginButton = document.getElementById("login");
const loginInput = document.getElementById("loginarea");
const mailInput = document.getElementById("mail");
const passwordInput = document.getElementById("password");

loginButton.addEventListener("click", () => {
  const data = {
    login: loginInput.value,
    mail: mailInput.value,
    password: passwordInput.value,
  };
  console.log(data);

  loginInput.value = "";
  mailInput.value = "";
  passwordInput.value = "";
});
