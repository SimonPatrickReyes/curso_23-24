# Proyecto 1: Explorando los Fundamentos del Desarrollo Web en Entornos de Cliente
_Simón Patrick_

---

## 1- Modelos de Programación en Entornos Cliente Servidor 
- __Arquitectura de una sola página__: Todo el contenido cargado en una única página.
- __Arquitectura de Renderizado del Lado del Servidor__: Páginas renderizadas en un servidor backend al momento de ser solicitadas por el usuario.
- __Arquitectura de Microservicios__: Arquitectura modularizada en muchos componentes, cada uno totalmente independiente del otro.

---

### Ejemplos
- Arquitectura de una sola página: https://thinkpixellab.com/
- Arquitectura de Renderizado del Lado del Servidor: https://vuejs.org/guide/scaling-up/ssr.html
- Arquitectura de Microservicios: Amazon

---

## 2- Mecanismos de Ejecución de Código en un Navegador Web. Capacidades y Limitaciones de Ejecución. Compatibilidad con Navegadores Web:

### ¿Cómo se ejecuta JS en un navegador?
Todos los navegadores vienen acompañados de un __intérprete__, en el caso de Chrome, este tiene un interprete que es "__V8__". Pues bien, este intérprete se ocupa de transcribir todo el código, línea a línea y mostrarlo por pantalla.

### Evaluación de las diferencias de compatibilidad entre navegadores.
El navegador con más carencias con JavaScript son los navegadores __Safari__,
su contraste, __Firefox__, que es el más compatible.

### Esto esta mostrado y reflejado en el siguiente enlace: https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs

---

### Resolución de problemas de compatibilidad en una aplicación web.
Aunque navegadores como Safari tengan problemas de compatibilidad con JS, existen compiladores, o transpiladores como __Babel__, traduce todo tu código JavaScript y lo transforma a un lenguaje común apto para los navegadores, entre ellos, Safari.

---
## 3- Lenguajes de Programación en Entorno Cliente
### JavaScript
    - Fácil manipulación del DOM.
    - AJAX para la carga de contenido dinámico (no necesita una recarga por los cambios).
    - Comunicación directa e inmediata entre cliente y servidor.
### TypeScript
    - Lenguaje intuitivo.
    - Escritura estática.
    - Rápida detección de errores.
---

### HTML
    - Lenguaje intuitivo.
    - Compatibilidad universal.
    - Accesibilidad (Facilita la creación de páginas web accesibles).
### CSS
    - Selección específica de elementos.
    - Herencia de elementos.
    - Creación de animaciones y efectos visuales.
---
## 4- Características de los Lenguajes de Script. Ventajas y desventajas
### ECMAScript:
    - Ventajas: Interfaz sencilla, versátil y sintaxis simple (basada en JS).
    - Desventajas: Poca seguridad y puede que no todos los navegadores interpreten bien el código.
### PHP:
    - Ventajas: Lenguaje de código abierto, automatización de tarea.
    - Desventajas: Seguridad baja y necesita de un servidor web para ejectuar el software.
---
### Python:
    - Ventajas: Gran portabilidad, gratis y de código abierto.
    - Desventajas: No adecuado para el desarrollo móvil y bastante lento.
### Ruby:
    - Ventajas: Rápido y flexible, código abierto y multitud de herramientas.
    - Desventajas: La curvade aprendizaje más elevada y poco soporte por la comunidad.
---
## 5- Tecnologías y Lenguajes Asociados. Integración del Código con las Etiquetas HTML:

### Exploración de tecnologías como CSS y HTML5
__HTML5__ se encarga de __estructurar y organizar__ el contenido de la página web.
__CSS__ se utiliza para __dar estilo__ al contenido de la página web.

---
### Creación de una pequeña aplicación web integrando código JavaScript de diferentes maneras.
__JavaScript__ influye entre los dos lenguajes de diferentes maneras:

Con el __HTML__, JS puede acceder y __modificar el DOM__ de la página para modificar los elementos del mismo. Tambien puede __agregar event listeners__ como botones o formularios, para detectar al usuario. 
En el __CSS__, puede cambiar los estilos y destaca el poder crear animaciones y transiciones.

---
## 6- Herramientas de Programación
### Uso de herramientas como Visual Studio Code, Chrome DevTools, etc.
#### Visual Studio Code
Editor de código fuente desarrollado por Microsoft lanzado el 29 de abril de 2015. Este destaca, entre otras cosas, por ser multiplataforma está disponible para Windows, macOS y Linux

#### Eclipse
Otro editor de código, este con un enfoque diferente, creado para convertirse en una plataforma de integración de herramientas de desarrollo. Es bastante popular entre los usuarios que desarrollan en Java, por lo que tiene bastante soporte con este lenguaje.

---
#### Intellij
Enfocada totalmente en el desarrollo de aplicaciones con Java. Al igual que Visual Studio, ambas comparten mucha popularidad y tienen una amplia comunidad de desarrolladores.

![w:240 center](./img/Intellij.png) ![w:240 center](./img/vsc.png) ![w:240 center](./img/eclipse.png)

