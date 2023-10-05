/* Escribe un script que pida al usuario el valor del radio de una circunferencia 
y muestre por pantalla: el radio, el diámetro, el perímetro de la circunferencia, el área del círculo, el área de la esfera y el volumen de la esfera.
 */

var radio = prompt("Introduzca el valor del radio de una circunferencia, en cm")
var diametro = (radio*2).toFixed(2);
var perimetro = (Math.PI*diametro).toFixed(2);
var areaCirculo = (Math.PI*(Math.pow(radio,2))).toFixed(2);
var areaEsfera = (4*Math.PI*(Math.pow(radio,2))).toFixed(2);
var volEsfera = (4/3*Math.PI*(Math.pow(radio,3))).toFixed(2);




window.alert(`Radio: ${radio}cm\nDiametro: ${diametro}cm\n
Perimetro: ${perimetro}cm\nÁrea del circulo: ${areaCirculo}cm²\n
Área de la esfera: ${areaEsfera}cm²\nVolumen de la esfera: ${volEsfera}cm³`)