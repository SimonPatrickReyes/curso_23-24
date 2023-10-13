var n=prompt("Indica el numero de veces que lanzaremos los dados")
var resultado=0;
var suma=0;

var cantidadVeces=[];

n=parseInt(n)

function lanzarDados() {
    for (let i = 0; i < n; i++) {
        
    var dado1=(Math.floor(Math.random()*6)+1)
    var dado2=(Math.floor(Math.random()*6)+1)
    suma=(dado1+dado2);
    console.log(suma);

    if (cantidadVeces[suma]>0) {
        let valor= cantidadVeces[suma]+1
        cantidadVeces[suma]=valor
    }
    else{
        cantidadVeces[suma]=1
    }
    for (let i = 2; i <= 12; i++) {
        if (cantidadVeces[i]==null) {
            cantidadVeces[i]=0
        }
        
    }
}

}
lanzarDados(n)
console.log(cantidadVeces);
alert(`2 ha salido:${cantidadVeces[2]} veces\n
3 ha salido:${cantidadVeces[3]} veces\n
4 ha salido:${cantidadVeces[4]} veces\n
5 ha salido:${cantidadVeces[5]} veces\n
6 ha salido:${cantidadVeces[6]} veces\n
7 ha salido:${cantidadVeces[7]} veces\n
8 ha salido:${cantidadVeces[8]} veces\n
9 ha salido:${cantidadVeces[9]} veces\n
10 ha salido:${cantidadVeces[10]} veces\n
11 ha salido:${cantidadVeces[11]} veces\n
12 ha salido:${cantidadVeces[12]} veces\n`);

