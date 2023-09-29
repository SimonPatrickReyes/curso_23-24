moment.locale('es')

nombre=prompt("Introduce tu nombre de usuario:")
const hora= moment().format('h');

console.log(hora)
if (hora>=6 && hora<=11){
    window.alert("Buenos dias "+nombre)
} else if(hora>=12 && hora<=18){
    window.alert("Buenos tardes "+nombre)
} else {
    window.alert("Buenos noches "+nombre)
}
