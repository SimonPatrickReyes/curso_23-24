var valores = [true, 5, false,"hola", "adios", 2];
var texto = []
var sumar = valores[1]+valores[5];
var restar = valores[1]-valores[5];
var multiplicar = valores[1]*valores[5];
var dividir = valores[1]/valores[5];
var resto = valores[1]%valores[5];

//Si algun valor del array es un string, que se añada al array "texto"
for (let i = 0; i < valores.length; i++) { 
    if (typeof(valores[i])==="string") {
        texto.push(valores[i])
    }
}

//Si algun valor del array es un boolean, que se escriba por consola el valor booleano true
for (let i = 0; i < valores.length; i++) { 
    if (typeof(valores[i])==="boolean") {
        console.log(valores[0])
    }
}

//Determinemos cuál de los dos elementos​ de texto​ es mayor
console.log(texto);
//Contaremos su cantidad de caracteres
if (texto[0].length>texto[1].length) {
    console.log(texto[0]+" es mayor que "+texto[1]);
    console.log("Caracteres de"+texto[0]+":"+texto[0].length)
    console.log("Caracteres de"+texto[1]+":"+texto[1].length)
} else {
    console.log(texto[1]+" es mayor que "+texto[0]);
    console.log("Caracteres de "+texto[0]+":"+texto[0].length)
    console.log("Caracteres de "+texto[1]+":"+texto[1].length)
}

console.log("Suma: "+sumar);
console.log("Resta: "+restar);
console.log("Multiplicacion: "+multiplicar);
console.log("Division: "+dividir);
console.log("Resto: "+resto);


