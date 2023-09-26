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




