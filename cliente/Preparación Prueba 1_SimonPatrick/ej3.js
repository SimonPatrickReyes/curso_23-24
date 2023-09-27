nombre=prompt("Introduce tu nombre de usuario:")
time=prompt("¿Qué hora es?")

if (time>=6 && time<=11){
    window.alert("Buenos dias "+nombre)
} else if(time>=12 && time<=18){
    window.alert("Buenos tardes "+nombre)
} else {
    window.alert("Buenos noches "+nombre)
}
