// Selectores
const inputEmail = document.querySelector("#email");
const inputAsunto = document.querySelector("#asunto");
const inputMensaje = document.querySelector("#mensaje");
const fomulario = document.querySelector("#formulario");
const btnSubmit = document.querySelector('#formulario button[type="submit"]');
const btnReset = document.querySelector('#formulario button[type="reset"]');
const spinner = document.querySelector("#spinner");

const formData = {
  email: " ",
  asunto: " ",
  mensaje: " ",
};

//Listeners
document.addEventListener("DOMContentLoaded", () => {
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);
  fomulario.addEventListener("submit", activarSpinner);
  btnReset.addEventListener("click", (e) => {
    e.preventDefault();
    resetForm();
  });
});

//Functions
function activarSpinner(e) {
  e.preventDefault;
  spinner.classList.remove("hidden");
  spinner.classList.add("flex");
  setTimeout(() => {
    spinner.classList.add("hidden");
    spinner.classList.remove("flex");
    resetForm();

    //creamos una alerta de finalizacion
    const alerta = document.createElement("P");
    alerta.classList.add(
      "bg-green-500",
      "text-white",
      "text-center",
      "rounded-lg",
      "mt-10",
      "text-sm"
    );
    alerta.textContent = "Formulario enviado con éxito";
    fomulario.appendChild(alerta);

    setTimeout(() => {}, 3000);
  }, 3000);
}

function resetForm() {
  formData.email = "";
  formData.asunto = "";
  formData.mensaje = "";
  fomulario.reset();
  validarInputs();
}

function validar(e) {
    
  if (e.target.value.trim() === "") {
    mostrarAlerta(
      `El campo ${e.target.id} es obligatorio`,
      e.target.parentElement
    );
    formData[e.target.name] = "";
    validarInputs();
    return;
  }
  if (e.target.id === "email" && !validarEmail(e.target.value)) {
    mostrarAlerta("Email no valido", e.target.parentElement);
    formData[e.target.name] = "";
    validarInputs();
    return;
  }

  limpiarAlerta(e.target.parentElement);

  formData[e.target.name] = e.target.value.trim().toLowerCase();
  validarInputs(formData);
  return;
}

function btnSubmitAvailable() {
    btnSubmit.classList.add("opacity-50");
    btnSubmit.disabled = true;
    return;
}

function validarInputs() {
  const values = Object.values(formData);
  //hacer comprobacion de los elementos
  if (values.includes === "") {
    btnSubmitAvailable()
  }
  btnSubmit.classList.remove("opacity-50");
  btnSubmit.disabled = false;
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
