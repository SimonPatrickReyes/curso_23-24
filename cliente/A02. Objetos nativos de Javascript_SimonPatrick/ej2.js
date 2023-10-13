/* Escribe un script que pida al usuario su nombre y apellidos y muestre:
El tamaño del nombre más los apellidos (sin contar espacios).
La cadena en minúsculas y en mayúsculas.
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga:
Nombre
Apellido 1 
Apellido 2
Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido, Por ejemplo, para Laura Folgado Galache sería lfolgadog.
Otra propuesta de nombre de usuario, compuesto por las tres primeras letras del nombre (con la primera en mayúscula) y de los dos apellidos. Por ejemplo, para el nombre anterior sería Laufolgal
 */
var personalInfo=prompt("Introduce tu nombre, primer y segundo apellido")

/* Tamaño de la cadena */
var tamaño = personalInfo.replaceAll(" ","").length
/* La cadena en minúsculas */
var minusculas = personalInfo.toLowerCase()

/* La cadena en mayúsculas */
var mayusculas = personalInfo.toUpperCase()

/* Que divida el nombre y los apellidos y los muestre en 3 líneas */
var persInfoArray= personalInfo.split(" ");

var nom=persInfoArray[0];

var ape1=persInfoArray[1];

var ape2=persInfoArray[2];

/* Propuesta de nombre de usuario 1*/
var user1=nom.slice(0,1)+ape1+ape2.slice(0,1);
user1=user1.toLowerCase()

/* Propuesta de nombre de usuario 2*/
var user2=nom.slice(0,1)+nom.slice(1,2)+ape1.slice(0,2)+ape2.slice(0,2);
user2=user2.toLowerCase();
firstLetter=user2.charAt(0);
user2=firstLetter.toUpperCase()+user2.slice(1)

window.alert(`Tamaño: `+tamaño+`
\nMinusculas: `+minusculas+`
\nMayusculas: `+mayusculas+`
\n`+nom+`
\n`+ape1+`
\n`+ape2+`
\n`+`Propuesta de nombre de usuario 1: `+user1+`
\n`+`Propuesta de nombre de usuario 2: `+user2
);


