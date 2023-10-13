/* Diseña un sitio web que muestre un libro de recetas (4 o 5), siguiendo las siguientes instrucciones:
- Las recetas deben tener nombre y explicación de la misma.
- Deben  mostrarse en formato ordered list
- La lista se generará desde JavaScript
- La web ha de tener un botón para eliminar receta que pida al usuario el número de receta a eliminar, comprobar si existe, 
    y si es así eliminarla de la lista.
 */


//Se declara lista "carrito"
var carrito = [
    { nombre: "Tortilla", explicacion: "La tortilla de patatas es un plato icónico de la cocina española. Para prepararla, necesitas 4 papas medianas y 1 cebolla grande. Pela y corta las papas y cebollas en rodajas finas. En una sartén grande, calienta aceite de oliva y cocina las papas y cebollas a fuego medio-bajo durante unos 20-25 minutos hasta que las papas estén tiernas. Escúrrelas y colócalas en un bol.Mientras tanto, bate 6 huevos en un bol grande, añadiendo una pizca de sal. Agrega las papas y cebollas cocidas a los huevos y mezcla. Deja reposar la mezcla durante unos minutos para que las papas absorban los sabores.Limpia la sartén y caliéntala con aceite de oliva. Vierte la mezcla de papas, cebollas y huevos y cocina a fuego medio-bajo durante 4-5 minutos hasta que los bordes estén dorados y el centro comience a cuajarse. Voltea la tortilla con cuidado y cocina el otro lado durante otros 4-5 minutos.Una vez lista, retira la tortilla de la sartén y déjala reposar unos minutos antes de cortarla en porciones y servirla caliente. Puedes disfrutarla sola o con una ensalada." },
    { nombre: "Potaje", explicacion: "Remoja los garbanzos durante la noche, luego escúrrelos.En una olla grande, saltea cebolla y ajo hasta dorar. Agrega los pimientos y zanahorias. Si usas chorizo, añádelo y dora. Agrega garbanzos, hojas de laurel y suficiente agua para cubrir. Hierve y luego reduce el fuego. Cocina a fuego lento durante 1 hora o hasta que los garbanzos estén tiernos. Añade más agua si es necesario. Añade las patatas y cocina hasta que estén tiernas. Sazona con pimentón, sal y pimienta al gusto.Sirve caliente con pan crujiente. El potaje es un plato versátil y nutritivo que puedes personalizar con tus ingredientes favoritos. Perfecto para los días fríos, este plato casero te llenará de calidez y sabor tradicional." },
    { nombre: "Puchero", explicacion: "En una olla grande, coloca la carne de res, el pollo, el hueso de jamón y los chorizos. Cubre con agua y agrega sal y las hojas de laurel. Hierve y luego reduce el fuego para cocinar a fuego lento durante 30-40 minutos. Añade los garbanzos y cocina durante otros 30 minutos o hasta que estén tiernos. En otra olla, cocina las zanahorias y las patatas en agua con sal hasta que estén tiernas.En una sartén aparte, sofríe los dientes de ajo en aceite de oliva hasta que estén dorados.Agrega las acelgas o el repollo a la sartén con el ajo y sofríelos hasta que estén tiernos. Sirve el puchero en un plato hondo, incluyendo carne, garbanzos, verduras y las patatas. Añade la mezcla de acelgas o repollo por encima." },
    { nombre: "Arroz con leche", explicacion: "En una olla grande, lleva a ebullición 4 tazas de leche junto con la cáscara de limón y la rama de canela. Reduce el fuego y deja que la leche infunda los sabores durante unos 10 minutos. Enjuaga el arroz bajo agua fría y luego agrégalo a la leche caliente. Cocina a fuego medio-bajo, revolviendo regularmente para evitar que el arroz se pegue al fondo. Una vez que el arroz haya absorbido la mayor parte de la leche y esté tierno, agrega el azúcar y una pizca de sal. Cocina a fuego lento durante otros 10-15 minutos, revolviendo constantemente hasta que el arroz con leche adquiera una consistencia cremosa. Si deseas, añade la esencia de vainilla para darle un toque de sabor adicional. Retira la cáscara de limón y la rama de canela. Sirve el arroz con leche caliente en tazones individuales y espolvorea canela en polvo por encima si lo prefieres." },
    { nombre: "Pudding", explicacion: "En una cacerola, calienta la leche a fuego medio sin que hierva. Agrega la mitad del azúcar y la esencia de vainilla. Mezcla hasta que el azúcar se disuelva por completo. En un bol aparte, bate las yemas de huevo con el azúcar restante, la maicena y la pizca de sal hasta obtener una mezcla suave. Vierte lentamente la mezcla de huevo en la leche caliente, revolviendo constantemente para evitar que las yemas se cocinen.Cocina a fuego medio-bajo, revolviendo continuamente hasta que la mezcla espese. Esto puede llevar unos 5-7 minutos. Retira del fuego y, si deseas, agrega tus sabores opcionales, como chocolate rallado, canela, nueces o pasas. Vierte el pudding en tazones individuales y refrigéralos durante al menos 2 horas para que se enfríe y adquiera una textura más firme. Sirve el pudding frío y, si lo prefieres, decóralo con crema batida, frutas o frutos secos." },
]

//Se declara la funcion mostrarLista, la recorre e introduce los elementos en formato li"
function mostrarLista() {
    var a="";

for(i = 0; i <= carrito.length-1; i++){
    var list = carrito[i]
    a += "<li>"+list.nombre+":\n"+list.explicacion+"</li>"
}

var MyList = document.getElementById("lista");
//Engloba los elementos li, dentro de una orderedList
MyList.innerHTML = "<ol>"+a+"</ol>";
}

//Funcion eliminarReceta
function eliminarReceta() {
    var num=prompt("Introduce un numero de receta para eliminarla")
    num=parseInt(num);

    //Si el numero es inferior a uno o mayor que la propia lista, este da error
    if (num>carrito.length || num<1) {
        window.alert("No existe esa receta")
        
    }else{
    num--;
    carrito=carrito.filter(receta => receta != carrito[num]);
    
   //Se vuelve a mostrar la lista, sin el elemento deseado 
   mostrarLista()
}
}

mostrarLista()