//Selectores y variables
const mensaje = document.querySelector("#mensaje");
const listaMensajes = document.querySelector("#lista-mensajes");
const agregar = document.querySelector("input[type='submit']");
const eliminarBtn = document.querySelector("#lista-mensajes");

let mensajes = []

//Listeners
agregar.addEventListener("click", guardarMensaje);
agregar.addEventListener("click", mostrarMensaje);
eliminarBtn.addEventListener("click", eliminarMensaje);

//Funciones
function guardarMensaje(e) {
  e.preventDefault();

  const mensajeObj = {
    id: Date.now(),
    text: mensaje.value
  };
  mensajes = [...mensajes, mensajeObj]

  console.log(mensajes)

  mostrarMensaje();
  mensaje.value = "";


}

function mostrarMensaje() {
  limpiarHTML();
  mensajes.forEach((mensaje) => {
    const mensajeHTML = document.createElement("tr");
    mensajeHTML.innerHTML = `
    <td><p>${mensaje.text}</p></td>
    <td><a href="#" class="borrar-mensaje">X</a></td>
        `;
    listaMensajes.appendChild(mensajeHTML);
  });
}

function limpiarHTML() {
  while (listaMensajes.firstChild) {
    listaMensajes.firstChild.remove();
  }
}

function eliminarMensaje(e) {
  if (e.target.classList.contains("borrar-mensaje")) {
    console.log(e.target.parentElement.parentElement.firstChild)
  }
}
