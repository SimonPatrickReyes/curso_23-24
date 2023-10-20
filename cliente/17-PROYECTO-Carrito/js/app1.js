//Selectores
const carrito = document.querySelector("#carrito");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaCursos = document.querySelector("#lista-cursos");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")

//Variables
let articulosCarrito = [];

//Listeners
cargarEventsListeners();

function cargarEventsListeners() {
  listaCursos.addEventListener("click", addCurso)
  carrito.addEventListener("click", eliminarCurso)
  vaciarCarritoBtn.addEventListener("click", ()=>{
    articulosCarrito = []
    limpiarHTML()
  })

}

function addCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const curso = e.target.parentElement.parentElement;
    leerDatosCurso(curso);
  }
}

// Lee la informacion del curso seleccionado

function eliminarCurso(e) {
    if (e.target.classList.contains("borrar-curso")) {
        const cursoId = e.target.getAttribute("data-id")

        articulosCarrito = articulosCarrito.filter((curso)=>
            curso.id !== cursoId
        )
        carritoHTML(articulosCarrito)
        
    }
}

function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //Revisamos si el curso ya existe en el array
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);

  if (existe) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
      }
    });
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
  carritoHTML(articulosCarrito);
}

function carritoHTML() {
  limpiarHTML();

  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;

    const row = document.createElement("tr");
    console.log(curso.titulo);

    row.innerHTML = `
        <td>
        <img src=${imagen} width="120px"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
        <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
        `;

    contenedorCarrito.appendChild(row);
  });
}

function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.firstChild.remove();
  }
}
