# Proyecto 1: Explorando los Fundamentos del Desarrollo Web en Entornos de Cliente

Indice
1. [Modelos de Programación en Entornos Cliente/Servidor](#modelos-de-programación)
   + Investigación de los modelos cliente/servidor más comunes.
   + Identificación de ejemplos de aplicaciones que utilizan cada modelo.
2. [Mecanismos de Ejecución de Código en un Navegador Web. Capacidades y Limitaciones de Ejecución. Compatibilidad con Navegadores Web:](#mecanismos-de-ejecución)
   + Estudio de cómo se ejecuta el código JavaScript en un navegador.
   + Evaluación de las diferencias de compatibilidad entre navegadores.
   + Resolución de problemas de compatibilidad en una aplicación web.
3. [Lenguajes de Programación en Entorno Cliente](#lenguajes-de-programación-en-entorno-cliente)
   + Investigación de lenguajes como JavaScript, TypeScript, y otros.
   + Comparación de sus características y aplicaciones.
4. [Características de los Lenguajes de Script. Ventajas y Desventajas:](#características-de-los-lenguajes-de-script)
   + Análisis de las ventajas y desventajas de la programación en lenguajes de script sobre la programación tradicional.
5. [Tecnologías y Lenguajes Asociados. Integración del Código con las Etiquetas HTML:](#tecnologías-y-lenguajes-asociados)
   + Exploración de tecnologías como CSS y HTML5.
   + Creación de una pequeña aplicación web integrando código JavaScript de diferentes maneras.
6. [Herramientas de Programación:](#herramientas-de-programación)
   + Uso de herramientas como Visual Studio Code, Chrome DevTools, etc.

## 1. Modelos de Programación en Entornos Cliente/Servidor
### Investigación de los modelos cliente/servidor más comunes
Uno de los modelos cliente/servidor son en los que el cliente hace uso de aplicaciones web, estos podemos distinguirlos o clasificarlos por su arquitectura:

   + Arquitectura de una sola página: Todo su contenido se muestra en **una única página y toda esta cargada**, siendo este contenido mostrado parcialmente, conforme el cliente interactúa con la página. Un ejemplo claro de página web única lo tenemos en sitios como portfolios de artistas: https://thinkpixellab.com/. Uno de sus inconvenientes es que no suelen ser muy intuitivas.
     
   + Arquitectura de Renderizado del Lado del Servidor: Estas páginas se caracterizan por estar **renderizadas en un servidor backend** al momento de ser solicitadas por el usuario, reducen el tiempo de procesado porque además estas suelen estar hechas puramente con HTML, CSS y JS. Para detectar páginas se recomienda desactivar el js, para ver si la página hace uso de todos sus recursos mediante la estructura HTML, yo por ejemplo he encontrado esta página de vuejs.org: _https://vuejs.org/guide/scaling-up/ssr.html_ (por ejemplo la página principal, sin javascript, carece de imágenes que puede obstruir al entendimiento y compresión de la misma). Estas páginas no deben de ser muy pesadas o con mucho contenido, ya que tardaría en cargar la página completa.

   + Arquitectura de Microservicios: Lo que más destaca de esta arquitectura es que esta modularizada en muchisímos componentes, cada uno totalmente independiente del otro (salvo estética) todo pensando para que a la hora de hacer cambios o si por ejemplo la aplicación es usada por muchos usuarios, es relativamente más fácil mantenerla y cuidarla. Esta enfoncado a proyectos grandes, por lo que para proyectos pequeños puede resultar demasiado complejo.

### Identificación de ejemplos de aplicaciones que utilizan cada modelo

   + Arquitectura de una sola página: _https://thinkpixellab.com/_
   + Arquitectura de Renderizado del Lado del Servidor:  _https://vuejs.org/guide/scaling-up/ssr.html_
   + Arquitectura de Microservicios: Amazon

## 2. Mecanismos de Ejecución de Código en un Navegador Web. Capacidades y Limitaciones de Ejecución. Compatibilidad con Navegadores Web:
### Estudio de cómo se ejecuta el código JavaScript en un navegador.
Los navegadores son los responsables de interpretar el codigo JavaScript, como este es un lenguaje por turnos, interpreta el código línea a línea, por ejemplo en el caso de Chrome, este tiene un interprete que es "V8". Pues bien, este intérprete se ocupa de transcribir todo el código y mostrarlo por pantalla.

### Evaluación de las diferencias de compatibilidad entre navegadores.
Tras consultar en un par de páginas, los principales navegadores tienen bastante compatibilidad, refiriendome a principales como Chrome, Microsoft Edge, Opera... El que más carencias tiene con JavaScript son los navegadores Safari, desarrollado por Apple Inc. Y su contraste, Firefox es el más compatible con JavaScript. Esto esta mostrado y reflejado en el siguiente enlace: _https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs_, en él, se hace un estudio y se testean las API de JavaScript en los navegadores anteriormente mencionados.

### Resolución de problemas de compatibilidad en una aplicación web.
JavaScript es un lenguaje que sigue actualizandose día tras día, los navegadores también, pero a un ritmo diferente, por lo que a día de hoy, todavía existen problemas de compatibilidad, para evitarlos se recomienda hacer uso de compiladores, o transpiladores* como **Babel**, este traduce todo tu código JavaScript y lo transforma a un "nivel de lenguaje" común apto para los navegadores que hayas escogido para traducir.

* Se considera que es un transpilador a aquellos compiladores capaces de traducir código entre dos lenguajes al mismo nivel de abstracción, por ejemplo, una traducción de TypeScript a JavaScript.

## 3. Lenguajes de Programación en Entorno Cliente
### Investigación de lenguajes como JavaScript, TypeScript, y otros.

+ #### JavaScript
Probablemente el lenguaje de desarrollo frontend más popular. Esto claro esta es por dos principales motivos, por que existe desde hace décadas (creado el 4 de diciembre de 1995 por Brendan Eich), y porque tiene algunas facilidades como:
   * En muchas de las ocasiones, es posible ejecutar el código **directamente en el dispositivo del cliente**, esto facilita su uso, aparte que que es mucho menos aparatoso a la hora de escribir el código.
   * Tiene un gran soporte de bibliotecas externas que hacen de JavaScript una herramienta mucho más extensa.

+ #### React
Es una de las librerías de JavaScript más usadas, fue lanzada por Facebook el 29 de mayo de 2013, y a día de hoy, es muy popula en países como EE.UU, China y Reino Unido. Como hemos mencionado anteriormente, este es un lenguaje secuencial, es decir, que se lee línea a línea. Este lenguaje funciona con JSX (JavaScript XML), destaca a la hora de depurar, ya que React por ejemplo ofrece funciones que detectan errores de código y también es posible depurar el código antes de su ejecución. También marcar que React tiene una muy buena compatibilidad con el SEO (Search Engine Optimization).

+ #### TypeScript
TypeScript nace, por así decirlo del propio JavaScript, es una extensión de la misma y sirve para redactar código JavaScript de una manera más sencilla y simple. Al igual que JavaScript, este lenguaje es muy usado y su comunidad cada vez aumenta más, esto ofrece también más soporte para la misma.
  
+ #### Angular
Nacido en 2012, de la mano de Misko Hevery y Adam Abrons, Angular es un framework que se suele usar comúnmente para realizar aplicaciones web de una sola página, aunque también destaca su uso para hacer menús dinámicos. Una de las ventajas más notables de este lenguaje, es que hace uso de HTML y JS de una manera muy única, y es que Angular **consigue sincronizar y fusionar estos dos códigos**, por lo que a la hora de escribir código, es mucho más ameno y se ahorra más tiempo.

+ #### Vue
Se define en su página como un _framework progresivo para construir interfaces de usuario_, este fue creado por Evan You el febrero de 2014. Este framework es por así decirlo, como una expansión de JavaScript en la que simplifica el código mediante otras herramientas, haciendo de la creación de aplicaciones una tarea más rápida y dinámica.

+ #### Node
Ideal para páginas web con bastante servicio back-end y de red del lado del servidor, este basado en el anteriormente mencionado compilador V8.

### Comparación de sus características y aplicaciones.
Una vez hemos revisado los principales lenguajes es hora de descatar lo mejor de cada uno:

+ #### JavaScript
   - Fácil manipulación del DOM.
   - AJAX para la carga de contenido dinámico (no necesita una recarga por los cambios).
   - Comunicación directa e inmediata entre cliente y servidor.
     
+ #### React
   - Curva de aprendizaje bastante leve.
   - Alta y rápida capacidad de respuesta.
   - Migración entre versiones fácil y cómoda.

+ #### TypeScript
   - Lenguaje intuitivo.
   - Escritura estática.
   - Rápida detección de erroes.
  
+ #### Angular
   - Alta compatibilidad en los navegadores.
   - Uso de TypeScript, por lo que al igual que el punto anterior, es intuitivo.
   - Reducción de código.

+ #### Vue
   - Poco pesado (18 KB de instalación).
   - Fácil de usar.
   - Arquitectura basada en componentes.

+ #### Node
   - Facilita el desarrollo rápido de API RESTful.
   - Permite la gestión simultánea de peticiones.
   - Facilita la creación de aplicaciones de internet de gran competencia.


## 4. Características de los Lenguajes de Script. Ventajas y Desventajas:
### Análisis de las ventajas y desventajas de la programación en lenguajes de script sobre la programación tradicional.
#### CMAScript:
   - Ventajas: Interfaz sencilla, versátil y sintaxis simple (basada en JS).
   - Desventajas: Poca seguridad y puede que no todos los navegadores interpreten bien el código.
#### PHP:
   - Ventajas: Lenguaje de código abierto, automatización de tarea.
   - Desventajas: Seguridad baja y necesita de un servidor web para ejectuar el software.
#### Python: 
   - Ventajas: Gran portabilidad, gratis y de código abierto.
   - Desventajas: No adecuado para el desarrollo móvil y bastante lento.
#### Ruby:
   - Ventajas: Rápido y flexible, código abierto y multitud de herramientas.
   - Desventajas: La curvade aprendizaje es un poco más elevada que la del resto y de todos los que hemos visto, es el menos conocido, por lo que puede tener poco soporte por la comunidad.

## 5. Tecnologías y Lenguajes Asociados. Integración del Código con las Etiquetas HTML:
### Exploración de tecnologías como CSS y HTML5.

### Creación de una pequeña aplicación web integrando código JavaScript de diferentes maneras.

## 6. Herramientas de Programación:
### Uso de herramientas como Visual Studio Code, Chrome DevTools, etc.


