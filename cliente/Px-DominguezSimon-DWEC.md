# Proyecto 1: Explorando los Fundamentos del Desarrollo Web en Entornos de Cliente

Indice
1. [Modelos de Programación en Entornos Cliente/Servidor](#modelos-de-programación-en-entornos-cliente/servidor)
   + Investigación de los modelos cliente/servidor más comunes.
   + Identificación de ejemplos de aplicaciones que utilizan cada modelo.
2. [Mecanismos de Ejecución de Código en un Navegador Web. Capacidades y Limitaciones de Ejecución. Compatibilidad con Navegadores Web:](#mecanismos-de-ejecución-de-código-en-un-navegador-web)
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
#### React
#### JavaScript
#### TypeScript
#### Angular
#### Vue

### Comparación de sus características y aplicaciones.

## 4. Características de los Lenguajes de Script. Ventajas y Desventajas:
### Análisis de las ventajas y desventajas de la programación en lenguajes de script sobre la programación tradicional.

## 5. Tecnologías y Lenguajes Asociados. Integración del Código con las Etiquetas HTML:
### Exploración de tecnologías como CSS y HTML5.
### Creación de una pequeña aplicación web integrando código JavaScript de diferentes maneras.

## 6. Herramientas de Programación:
### Uso de herramientas como Visual Studio Code, Chrome DevTools, etc.


