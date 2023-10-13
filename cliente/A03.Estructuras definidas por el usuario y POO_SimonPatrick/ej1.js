var n = prompt("¿cuantos bauuuba quieres?")


n=parseInt(n);

function bauuuba(n) {

    if (n===0) {
      return;

    }else{
      document.write("bauuuba ");
      bauuuba(n-1)
    }
    
  }

  bauuuba(n)
