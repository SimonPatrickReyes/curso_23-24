// Evitar que se recarge la pagina con el form
var form = document.getElementById("formulario");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm)


var equipos = [
    { nombre: "Barcelona", puntos: 20 },
    { nombre: "Real Madrid", puntos: 19 },
    { nombre: "Atlético de Madrid", puntos: 16 }
]

function mostrarTabla() {
    var a = "";

    equipos=equipos.sort(function (a, b) {
        return b.puntos-a.puntos    
    })

    for (i = 0; i <= equipos.length - 1; i++) {
        var list = equipos[i]
        a += "<tr>"+"<th>"+(i+1)+"</th>"+"<th>"+list.nombre+"</th>"+"<th>"+list.puntos+"</th>" + "</tr>"
    }
    var MyTable = document.getElementById("tabla");
    //Engloba los elementos li, dentro de una orderedList
    MyTable.innerHTML = "<table>"+a+"</table>";
}

function enviarDatos(){
    var inputNombre=document.getElementById("nombre").value;  
    var inputPuntos=document.getElementById("puntos").value;
    puntos=parseInt(puntos);

    //Comprobamos si el equipo ya existe
    //Metemos en un array el equipo, si coincide
    var equipo = equipos.filter(equipo => equipo.nombre == inputNombre)

    //Comprobamos que si el equipo no esta vacío, se modificara los puntos
    if (equipo.length!=0){
        var posicion= equipos.indexOf(equipo[0]);
        console.log(posicion)
        equipos[posicion].puntos = inputPuntos;
    }
    //Si lo esta, se añadirá como uno nuevo
    else{
        var equipo={nombre:inputNombre, puntos:inputPuntos};
        equipos.push(equipo)
    }
    mostrarTabla()
}

mostrarTabla()



