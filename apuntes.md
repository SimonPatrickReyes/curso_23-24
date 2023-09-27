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
  ```
  

  






