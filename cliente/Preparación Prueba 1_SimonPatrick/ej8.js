var entrada=prompt()
function palindromo() {
    var regEx = /[\W_]/g;
    var texto = entrada.toLowerCase().replace(regEx, '');
    var txtReves = texto.split('').reverse().join(''); 
    if (txtReves === texto) {
        console.log("palindromo");
    } else{
        console.log("no es palindromo");
    }
  }

palindromo(entrada);


