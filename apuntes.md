# Proyecto 1 (hecho)

https://silver-succotash-n1q835e.pages.github.io/docs/proyectos/proyecto1/#descripcion-del-proyecto

Realizar documento de investigación y presentación en Markdown (presentación en marp)

### 26/09/23
Formas de declarar una variable:
  - **var**: Evitar, en desuso,ya que este permite declarar dos variables con el mismo nombre).                   □ □
  - **let**: No permite redeclarar variables. Si permite la modificación del valor.                               ▣ □ 
  - **const**: Constante, ni permite redeclararla, ni permite modificar su valor, tambien hay que inicializarlas. ▣ ▣

Nombre de variables:
  - No puede empezar por un dígito/número (si se necesitase se podría poner con guión bajo: "_45").

#### Tarea
- Buscar un estandar personal
- Hacer FreeCodeCamp de JS

Formas de declarar cadenas (Primitivas):

```
  const producto= "Monitor 20"
  console.log(producto)
```
```
  const producto2= String("Monitor 20");
  console.log(producto2)
```

Tercera forma (en desuso):
```
const producto3= New String("Monitor hd")
console.log(producto3)
```
#### Métodos de String
```
String de ejemplo
const producto= "monitor de 20 pulgadas"
```
producto.length: longitud del array.
producto.indexOf("monitor"): marca la posición de monitor respecto al string.
producto.includes("monitor"): devuelve un booleano (true o false), que en este caso es true.

```
String de ejemplo
const producto= "monitor de 20 pulgadas"
const precio= "20 euros"
```
producto.concat(" precio"): concatenar cadenas, también puede sustituirse con "+" y "," (producto+" 20 euros").

#### Template String (`)
```
console.log(`El ${producto} tiene un precio de ${precio}`)
```
### 27/09/23

#### Eliminar espacios en blanco
```
const producto=" Monitor de 20 pulgadas"
```
- Eliminar espacios en blanco al principio/al final
  
  ```
  producto.trimStart().length
  producto.trimEnd().length
  producto.trim().length -> el más usado, este elimina los espacios tanto al principio como al final
  ```

#### Replace, slice y subtring
- Replace
  
  ```
  const producto="Monitor de 20 pulgadas"
  console.log(producto.replace("20","24")) -> No modifica la cadena, en este caso solo se modifica en la impresión
  ```
- Slice
  ```
  const producto="Monitor de 20 pulgadas"
  console.log(producto.slice(6,20)-> " de 20 pulgada"
  console.log(producto.slice(3)-> "itor de 20 pulgadas"
  console.log(producto.slice(2,1)-> <empty string>
  ```
- Subtring (permite todas las opciones del replace e incluye la última como una opción válida, simplemente lo ordena)
  ```
  console.log(producto.subtring(2,1)-> "o"
  ```

#### Repeat, split, toUpperCase, toString
- Repeat
  
  ```
  const producto="Monitor de 20 pulgadas"
  console.log(producto.repeat(3))= "Monitor de 20 pulgadasMonitor de 20 pulgadasMonitor de 20 pulgadas"
  ```
- Split
  
  ```
  const producto="Monitor de 20 pulgadas"
  console.log(producto.split(" "))= Array(4)["Monitor","de","20","pulgadas"]
  ```
- toUpperCase (toLowerCase para minúsculas)
  
  ```
  const producto="Monitor de 20 pulgadas"
  console.log(producto.toUpperCase)= "MONITOR DE 20 PULGADAS"
  ```

- toString
   
  ```
  const producto=2000
  console.log(producto.toString)= "2000"
  ```

  ## Números
  #### Dos formas de declarar números
  ```
  const numero= 12
  const numero2= 20.5
  const numero3= .234
  const numero4= -34.6

  const numero5 = new Number(29) -> Esto es más inusual de usar
  ```
  #### Operaciones
  ```
  num1= 20;
  num2= 30;
  let resultado;

  //Suma
  resultado=num1+num2;
   //Restar
  resultado=num1-num2;
   //MUltiplicar
  resultado=num1*num2;
   //Dividir
  resultado=num1/num2;
   //Módulo o Resto
  resultado=num1%num2;
  ```
  #### Objeto Match
  ```
  let resultado;

  resultado = Math.PI -> 3.1415...

  resultado = Math.round(2.6) -> Redondear
  resultado = Math.cell(2.3) -> Redondear por arriba = 3
  resultado = Math.floor(2.8) -> Redondear por abajo = 2

  resultado = Math.sqrt(144) -> Raíz cuadrada = 12
  resultado = Math.min(2,3,1,-1,6) -> Mínimo resultado = -1
  resultado = Math.max(2,3,1,-1,6) -> Máximo resultado = 6
  
  resultado = Math.floor((Math.random()*51)) -> Número aleatorio entre 0 y 50
  ```
  #### Orden de las operaciones
  ```
  let resultado

  resultado=20+30*2 -> 20+60 -> 80
  resultado=(20+30)*2 -> 50*2 -> 100
  resultado=20*0.2 = 20%
  resultado=20*1.21 = más IVA
  ```
  #### Incremento y decremento
  ```
  puntuacion=50

  console.log(puntuacion++) -> 50
  console.log(puntuacion) -> 51

  console.log(puntuacion--) -> 51
  console.log(puntuacion) -> 50

  
  console.log(puntuacion+=2) -> 52
  console.log(puntuacion-=2) -> 50
  ```
  #### Conversiones y tipos
  ```
  const num1= "20"
  const num2= "20.3"
  const num3= "Uno"
  const num4= 20

  console.log(typeof(num1))= String
  console.log(typeof(num4))= Number

  // Conversión a números
  num1=Number.parseInt(num1)
  console.log(typeof(num1))= Number

  num2=Number.parseFloat(num2)
  console.log(typeof(num2))= Float

  //Comprobar si son numeros
  console.log(Number.isInteger(num1) -> Booleano de si es entero
  console.log(Number.isParse(num2) -> Booleano de si es decimal
  ```
  #### Otros comparadores
  ```
  const num1=20
  const num2="20"
  const num3=30
  const num4=20

  console.log(num1>num3)= false
  console.log(num1<num3)= true
  console.log(num1!=num3) = false (te dicen que no son distintos por valor)
  console.log(num1!==num3) = true (te dicen que si son distintos por tipo, se recomienda el uso de este operador)
  console.log(num1==num3)= true (compara valor pero no tipo)
  console.log(num1===num3)= false (compara valor y tipo, el recomendado)

  let numero
  console.log(typeof(numero))= undefined

  const num5= null
  console.log(num5)= null
  console.log(typeof(num5))= object

  console.log(num5==numero)= true (una doble comparación entre un null y undefined da true, aunque sean tipos direfentes, por eso se recomienda siempre usar una triple igualdad "===")
  ```

#### Operador ternario
```
console.log(boolean? "True":"False" (es equivalente a usar un if else, mucho más compacto y sencillo)
```
#### Objeto Date
```
const diaHoy= newDate()

let valor
valor= diaHoy.getMonth()= 8 (septiembre pero empieza a contar por 0)
valor= diaHoy.getDay()= 3 (empieza por domingo cuenta miercoles como el dia 3)
valor= diaHoy.getDate()= 27 (dia del mes)
valor= diaHoy.getYear()= 2023
```
#### Libreria Moment
Te ofrece un formato **más limpio** y **más entendible** que el que aporta Date.

Para insertarla basta como añadirlo en tu Index:
```
<script>https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js</script>
<script>https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js</script>

```

```
console.log(moment().format("MMMM Do YYYY, h:mm:ss",diaHoy)) = septiembre 27º 2023, 10:00:00
```

### 29/09/23
Formas de declarar objetos
```
//Objeto ___________

//Objeto constructor
function Producto (name,price){
  this.name=name;
  this.price=price;
}

const producto2= newProducto("tele",45)
```
#### Otros métodos
```
const prodcuto={
  name="monitor"
  price=20
}

console.log(Object.keys(producto) -> te da un array con las propiedades
console.log(Object.values(producto) -> te da un array con las propiedades con sus valores
console.table(Object.entries(producto) -> te da un array bidimensional con las propiedades y sus valores

```
#### Arrays
```
const numeros = [12,13,14,15,16]

const meses = ["enero","febrero",15,16]

// Acceder a un array
meses[0]="marzo" -> cambia enero por marzo

// Añadir elementos a un array
const carrito = []

const producto = {
  nombre="monitor"
  precio=500
}

const producto2 = {
  nombre="telefono"
  precio=100
}

carrito.unshift(producto) -> añadido al comienzo
carrito.push(producto) -> añade al final
```
####  Express Operator

```
// Añadir elementos a un array
const carrito = []

const producto = {
  nombre="monitor"
  precio=500
}

const producto2 = {
  nombre="telefono"
  precio=100
}

let resultado =[...carrito, producto] -> copia del array y añade el producto
resultado =[...resultado, producto2] -> copia del array anterior y añade el segundo producto (Para añadir al comienzo simplemente al reves "[producto2,...resultado]"

```
####  Eliminar elementos de un array
```
const carrito = []

const producto = {
  nombre="monitor"
  precio=500
}

const producto2 = {
  nombre="telefono"
  precio=100
}

let resultado =[...carrito, producto] -> copia del array y añade el producto
resultado =[...resultado, producto2] -> copia del array anterior y añade el segundo producto (Para añadir al comienzo simplemente al reves "[producto2,...resultado]"

resultado.shift() -> Elimina el primer elemento del array resultado
resultado.pop() -> Elimina el último elemento del array resultado

resultado.splice() -> Mejor método, tú eliges cuanto eliminar del array
```
#### Destructuring arrays
```
const numeros = [10,20,30,40]
const [primero] = numeros -> da nombre a la posicion del array
console.log(primero)= 10
const [,,jose] = numeros -> da nombre a la posicion del array
console.log(jose)= 30

const [primero,segundo, ...resto] = numeros -> crea un array con el "resto" de elementos del array  (esto si se puede llegar a usar más que lo anterior)
```
#### forEach
```
const carrito = [
{nombre:"Monitor", precio:500},
{nombre:"Pantalla", precio:500},
{nombre:"Teclado", precio:500},
{nombre:"Raton", precio:500},
]
for (int i=0; i<carrito.length;i++){
console.log(carrito[i].nombre)
}

carrito.forEach(function(prodcuto)){
console.log(producto.nombre)
}

carrito.map(function(prodcuto)){  -> la diferencia entre map y forEach, es que map puede recorrer la array, eleminar un elemento, y devuelve el array, el forEach no.
console.log(producto.nombre)
}


```

  
  
  

  






