/* La primera semana del año es la que tiene el primer jueves de Enero. 
Todos los años tienen 52 semanas, excepto los años bisiestos que tienen 53 semanas.
Crea un script que reciba un string en formato YYYY-MM-DD y devuelva a qué número de semana pertenece una fecha dada. */

//Se introduce la fecha
var f = prompt("Introduce una fecha con el siguiente formato: YYYY-MM-DD")

//Se pasa a Array para obtener el dato del año
const fecha = f.split(" ") && f.split("-");

//Creamos una variable con la fecha 1 de enero del año correspondiente
const fechaInicial= new Date(fecha[0],0,1); //1 de enero

//Volvemos a establecer la fecha que ha introducido el usuario a un Date
var fechaIntroducida= new Date(fecha)

/* Hacemos el calculo restando la fecha introducida a la inicial, 
el resultado sale en milisegundos, por lo que tendremos que pasarlo a semanas */
var resto= fechaIntroducida-fechaInicial

//Conversión a semanas
resto=resto/60000 //de milisegundos a minutos
resto=resto/60 //de minutos a horas
resto=Math.round(resto/24) //de horas a dias
resto=Math.round(resto/7) //de dias a semanas

//El numero de semanas que han pasado desde el 1 de enero hasta la fecha introducida es el equivalente al numero de esa semana en si.
window.alert("Estamos en la semana nº"+resto)


