const form = document.querySelector("form")
const nameInmput = document.querySelector("#name")
const emailinmput = document.querySelector("#email")
const jobselect = document.querySelector("#job")
const messagetextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  if (nameInmput.value === "") {
    alert("Por favor, preencha seu nome"); return;
  }
  if (emailinmput.value === "" || !isEmailValid(emailinmput.value)) {
    alert("Por favor, preencha seu email"); return

  }
  form.submit()
})

function isEmailValid(email) {
  const emailRegex = new RegExp(
    //usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) { return true; }
  return false;
}

function validatePassword(password, mindigits) {
  if (password.lenght >= mindigits) {
    return true
  }
  return false
}

function T() {
  var texto = document.getElementById("TT");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

function W() {
  var texto = document.getElementById("WW");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

function C() {
  var texto = document.getElementById("CC");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

function cont() {
  var texto = document.getElementById("CCC");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

function J() {
  var texto = document.getElementById("JJ");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

function V() {
  var texto = document.getElementById("VV");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

function I() {
  var texto = document.getElementById("jsI");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

function II() {
  var texto = document.getElementById("jsII");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

function III() {
  var texto = document.getElementById("jsIII");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

function IIII() {
  var texto = document.getElementById("jsIIII");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}