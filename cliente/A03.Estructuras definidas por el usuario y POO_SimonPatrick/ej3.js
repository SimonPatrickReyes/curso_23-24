var matriz = [[5, 4, 6], [2, 9, 3], [8, 1, 10, 7]];

var matrizOrdenada = [];


function aplanarMatrizBi() {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matrizOrdenada.push(matriz[i][j])

        }
    }
    console.log(matrizOrdenada);
}

function ordenarMatriz() {
    var aux;
    for (let i = 0; i < matrizOrdenada.length; i++) {
        for (let j = 0; j < (matrizOrdenada.length - i); j++) {
            if (matrizOrdenada[j] > matrizOrdenada[j + 1]) {
                aux = matrizOrdenada[j];
                matrizOrdenada[j] = matrizOrdenada[j + 1];
                matrizOrdenada[j + 1] = aux;

            }
        }

    }
    console.log(matrizOrdenada);
}

aplanarMatrizBi()
ordenarMatriz()