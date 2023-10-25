//Selectores y variables
const mensaje = document.querySelector("#mensaje");
const listaMensajes = document.querySelector("#lista-mensajes");
const agregar = document.querySelector("input[type='submit']");

const mensajes = [];
const mensajesStorage  = localStorage.getItem("mensajes")
const mensajesJSON = JSON.parse(mensajesStorage)

//Listeners
agregar.addEventListener("click", guardarMensaje);
agregar.addEventListener("click", mostrarMensaje);

//Funciones
function guardarMensaje(e) {
  e.preventDefault();
  mensajes.push(mensaje.value);
  localStorage.setItem("mensajes",JSON.stringify(mensajes))
  mostrarMensaje()
}


console.log(mensajesJSON)

function mostrarMensaje() {
  limpiarHTML();
  mensajes.forEach((mensaje) => {
    const mensajeHTML = document.createElement("p");
    mensajeHTML.innerHTML = `
        <p>${mensaje}</p>
        `;
    listaMensajes.appendChild(mensajeHTML);
  });
  
}

function limpiarHTML() {
  while (listaMensajes.firstChild) {
    listaMensajes.firstChild.remove();
  }
}
