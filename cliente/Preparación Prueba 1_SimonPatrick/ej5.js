var valores = [true, 5, false,"hola", "adios", 2];

for (let i = 0; i < valores.length; i++) { 
    if (typeof(valores[i])==="string") {
        console.log(valores[i].length);
    }
}