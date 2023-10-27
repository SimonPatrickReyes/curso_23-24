// Selectores
const inputEmail = document.querySelector("#email");
const inputAsunto = document.querySelector("#asunto");
const inputMensaje = document.querySelector("#mensaje");
const fomulario = document.querySelector("#formulario");

//Listeners
document.addEventListener("DOMContentLoaded", () => {
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);
});

//Functions
function validar(e) {
  if (e.target.value.trim() === "") {
    mostrarAlerta(
      `El campo ${e.target.name} es obligatorio`,
      e.target.parentElement
    );
    return;
  }
  if (e.target.id === "email" && !validarEmail(e.target.value)) {
    mostrarAlerta("Email no valido", e.target.parentElement);
    return;
  }
  limpiarAlerta(e.target.parentElement);
}

function validarEmail(email) {
  regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  resultado = regex.test(email);
  return resultado;
}

function limpiarAlerta(referencia) {
  const alerta = referencia.querySelector(".bg-red-600");
  if (alerta) {
    alerta.remove();
  }
}

function mostrarAlerta(mensaje, referencia) {
  limpiarAlerta(referencia);
  const error = document.createElement("P");
  error.textContent = mensaje;
  error.classList.add("bg-red-600", "text-center", "text-white", "p-2");
  referencia.appendChild(error);
}
