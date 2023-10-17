var entrada=prompt("Introduce una palabra")
var palabra=entrada.toUpperCase()
const abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
var newWord = [];

for (let i = 0; i < palabra.length; i++) {
    
    let newPosition = abecedario.indexOf(palabra[i])+3;
    if (newPosition>abecedario.length){
        newPosition=newPosition-27    
    }
    let newCharacter = abecedario[newPosition];
    newWord.push(newCharacter);
}

console.log(newWord);

class CifradoCesar {
    constructor(entrada) {
        this.entrada = entrada;
    }

    cifrar(n) {
        for (let i = 0; i < palabra.length; i++) {
    
            let newPosition = abecedario.indexOf(palabra[i])+n;
            if (newPosition>abecedario.length){
                newPosition=newPosition-27    
            }
            let newCharacter = abecedario[newPosition];
            newWord.push(newCharacter);
        }
    }
};