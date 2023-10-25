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
  datosBusqueda.year = parseInt(e.target.value);
  filtrarCoches();
});

minimo.addEventListener("input", (e) => {
  datosBusqueda.minimo = parseInt(e.target.value);
  filtrarCoches();
});

maximo.addEventListener("input", (e) => {
  datosBusqueda.maximo = parseInt(e.target.value);
  filtrarCoches();
});

puertas.addEventListener("input", (e) => {
  datosBusqueda.puertas = parseInt(e.target.value);
  filtrarCoches();
});

transmision.addEventListener("input", (e) => {
  datosBusqueda.transmision = e.target.value;
  filtrarCoches();
});

color.addEventListener("input", (e) => {
  datosBusqueda.color = e.target.value;
  filtrarCoches();
});

//Funciones
function mostrarCoches(coches) {
  limpiarHTML();
  coches.forEach((coche) => {
    const cocheHTML = document.createElement("p");
    cocheHTML.innerHTML = `
        <p> ${coche.marca} - ${coche.modelo} - ${coche.year} - ${coche.precio} - ${coche.puertas} - ${coche.color} - ${coche.transmision}</p>
        `;
    contenedor.appendChild(cocheHTML);
  });
}

function filtrarCoches() {
  const resultado = coches
  .filter(filtrarMarca)
  .filter(filtrarYear)
  .filter(filtrarMinimo)
  .filter(filtrarMaximo)
  .filter(filtrarPuertas)
  .filter(filtrarTransmision)
  .filter(filtrarColor)
  mostrarCoches(resultado);
}

function filtrarMarca(coche) {
  if (datosBusqueda.marca) {
    return coche.marca === datosBusqueda.marca;
  }
  return coche;
}

function filtrarYear(coche) {
  if (datosBusqueda.year) {
    return coche.year === datosBusqueda.year;
  }
  return coche;
}

function filtrarYear(coche) {
  if (datosBusqueda.year) {
    return coche.year === datosBusqueda.year;
  }
  return coche;
}

function filtrarMinimo(coche) {
  if (datosBusqueda.minimo) {
    return coche.precio >=  datosBusqueda.minimo;
  }
  return coche;
}

function filtrarMaximo(coche) {
  if (datosBusqueda.maximo) {
    return coche.precio < datosBusqueda.maximo;
  }
  return coche;
}

function filtrarPuertas(coche) {
  if (datosBusqueda.puertas) {
    return coche.puertas === datosBusqueda.puertas;
  }
  return coche;
}

function filtrarTransmision(coche) {
  if (datosBusqueda.transmision) {
    return coche.transmision === datosBusqueda.transmision;
  }
  return coche;
}

function filtrarColor(coche) {
  if (datosBusqueda.color) {
    return coche.color === datosBusqueda.color;
  }
  return coche;
}

function limpiarHTML() {
  while (contenedor.firstChild) {
    contenedor.firstChild.remove();
  }
}
