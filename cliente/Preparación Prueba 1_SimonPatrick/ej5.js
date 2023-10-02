var valores = [true, 5, false,"hola", "adios", 2];
var texto = []
for (let i = 0; i < valores.length; i++) { 
    if (typeof(valores[i])==="string") {
        texto.push(valores[i])
    }
}

//Determinemos cuál de los dos elementos​ de texto​ es mayor
console.log(texto);
//Contaremos su cantidad de caracteres
if (texto[0].length>texto[1].length) {
    console.log(texto[0]+" es mayor que "+texto[1]);
    console.log("Caracteres de"+texto[0]+":"+texto[0].length)
    console.log("Caracteres de"+texto[1]+":"+texto[1].length)
} else{
    console.log(texto[1]+" es mayor que "+texto[0]);
    console.log("Caracteres de "+texto[0]+":"+texto[0].length)
    console.log("Caracteres de "+texto[1]+":"+texto[1].length)
}
