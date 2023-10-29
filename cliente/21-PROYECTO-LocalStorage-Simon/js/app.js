//Selectores y variables
const mensaje = document.querySelector("#mensaje");
const listaMensajes = document.querySelector("#lista-mensajes");
const agregar = document.querySelector("input[type='submit']");
const eliminarBtn = document.querySelector("#lista-mensajes");

let mensajes;

//Comprobamos si el localStorage esta vacio
if (localStorage.getItem("mensajes") == null) {
  mensajes = []
} else {
  mensajes = JSON.parse(localStorage.getItem("mensajes"))
};



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
  
  //Guardado en localStorage
  mensajesToString = JSON.stringify(mensajes)
  localStorage.setItem("mensajes", mensajesToString)
  console.log(mensajes)

  mostrarMensaje();
  mensaje.value = "";
}

function mostrarMensaje() {
  limpiarHTML();
  mensajes.forEach((mensaje) => {
    console.log(mensaje);
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

    const row = e.target.parentElement.parentElement;

    const messageText = row.querySelector('td p').textContent;

    mensajes = localStorage.getItem("mensajes")
    mensajesParse = JSON.parse(mensajes)

    mensajes = mensajesParse.filter((mensaje) => mensaje.text !== messageText);

    mensajesToString = JSON.stringify(mensajes)

    localStorage.setItem("mensajes", mensajesToString)

    mostrarMensaje();
    console.log(mensajes)

  }
}

mostrarMensaje()