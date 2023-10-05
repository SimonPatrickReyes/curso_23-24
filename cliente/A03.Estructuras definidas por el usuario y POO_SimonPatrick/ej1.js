var n = prompt("¿cuantos bauuuba quieres?")
var bauuuba = "";

function funBauuuba() {
 
        if (n===0) {
            return

        } else {
            bauuuba = bauuuba + " bauuuba ";
            --n
            funBauuuba()
        }

        

    window.alert(bauuuba)
}

funBauuuba()
