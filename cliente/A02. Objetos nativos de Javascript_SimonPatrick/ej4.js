/* Diseña un sitio web que muestre la hora actual actualizada por segundos. 
La hora debe tener el formato hh:mm:ss am/pm de forma que si la hora, los minutos o los segundos tienen un solo dígito 
se debe añadir un 0 para completar el formato.

Las horas se presentarán en formato de 12 horas, añadiendo am o pm dependiendo si la hora es anterior o posterior a las 12 del mediodía.*/

function hora() {
    //Cogemos la fecha actual, horas minutos y segundos
    var today = new Date();
    var hour = today.getHours();
    var mins = today.getMinutes();
    var secs = today.getSeconds();

    //Cogemos la fecha actual, horas minutos y segundos

    if (hour < 12) {
        amPm = "am"
    } else {
        amPm = "pm"
    }

    if (hour == 0) {
        hour = 12
    } else if (hour > 12) {
        hour = hour - 12
    }


    //Llamamos a la funcion CheckNumber
    hour = checkNumber(hour);
    mins = checkNumber(mins);
    secs = checkNumber(secs);

    document.getElementById("hora").innerHTML = hour + " : " + mins + " : " + secs + " " + amPm;

    var time = setTimeout(
        function () { 
            hora() 
        }, 
        500);
}

//Añade ceros a los numeros menores a 10 (un dígito)
function checkNumber(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

hora()
checkNumber()