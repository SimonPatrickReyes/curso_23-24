var button=document.getElementById("button")
button.onclick = function() {crearVentana()}
function crearVentana() {
    var espacio=400;
    
    window.open("https://www.argar.cat/es/ventana-nueva-con-javascript/","width="+espacio+", height="+espacio+"")
}

// no me deja hacer pop up