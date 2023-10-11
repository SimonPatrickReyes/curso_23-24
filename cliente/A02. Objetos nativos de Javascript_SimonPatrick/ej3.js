/* La primera semana del año es la que tiene el primer jueves de Enero. 
Todos los años tienen 52 semanas, excepto los años bisiestos que tienen 53 semanas.
Crea un script que reciba un string en formato YYYY-MM-DD y devuelva a qué número de semana pertenece una fecha dada. */

var f = "2023-10-11";

const fecha = f.split(" ") && f.split("-");
const fechaInicial=[fecha[0],1,1];

console.log(fecha);

let year = fecha[0];
let month = fecha[1];
let day = fecha[2];



// dia de la semana de la fecha introducida
const a = new Date(fecha);
const diaSemana = a.getDay();
console.log(diaSemana);

// dia de la semana de principio de año
const b = new Date(fechaInicial);
const diaSemanaIncial = b.getDay();
console.log(diaSemanaIncial);

//pasar string a int

day+1;
console.log(fecha)



