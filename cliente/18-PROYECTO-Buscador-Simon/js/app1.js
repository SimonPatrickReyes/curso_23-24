//Selectores y variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const transmision = document.querySelector("#transmision");
const puertas = document.querySelector("#puertas");
const color = document.querySelector("#color");

const contenedor = document.querySelector("#resultado");

const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

// Crear los años del select
const max = new Date().getFullYear();
const min = max - 10;

for (let i = max; i > min; i--) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  year.appendChild(option);
}

//Listeners
document.addEventListener("DOMContentLoaded", () => {
  mostrarCoches(coches);
});

//Añade los resultados de los selects al objeto datosBusqueda
marca.addEventListener("input", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarCoches();
});

year.addEventListener("input", (e) => {
  datosBusqueda.year = e.target.value;
});

minimo.addEventListener("input", (e) => {
  datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener("input", (e) => {
  datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener("input", (e) => {
  datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener("input", (e) => {
  datosBusqueda.transmision = e.target.value;
});

color.addEventListener("input", (e) => {
  datosBusqueda.color = e.target.value;
});

//Funciones
function mostrarCoches(coches) {
  coches.forEach((coche) => {
    const cocheHTML = document.createElement("p");
    cocheHTML.innerHTML = `
        <p> ${coche.marca} - ${coche.modelo} - ${coche.year} - ${coche.precio} - ${coche.puertas} - ${coche.color} - ${coche.transmision}</p>
        `;
    contenedor.appendChild(cocheHTML);
  });
}

function filtrarCoches() {
  const resultado = coches.filter(filtrarMarca);
  mostrarCoches(resultado);
}

function filtrarMarca(coche) {
  if (datosBusqueda.marca) {
    return coche.marca === datosBusqueda.marca;
  }
  return coche;
}
