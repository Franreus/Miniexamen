# Aplicación de canciones mini examen

Versión 3: 
 + las canciiones se leen/guardan en un **fichero** en formato JSON.
 + la aplicación (musica-app.js):
   + usa módulos propios (cancion.js) para organizar el código.
   + usa módulos del núcleo de Node (fs) para lectura/escritura de ficheros.
   + usa módulos de terceros:
     + para interpretar los comandos en línea y ejecutar las funciones (yargs)
     + para colorear la salida en la consola (chalk)

##### Enunciado
> ubicar la fuente de datos en un archivo externo e interactuar con ellos mediante la línea de comandos, implementando las siguientes funciones:

````javascript
const crearCancion(lasCanciones, titulo, cuerpo) : nueva dimensión
const borrarCancion(lasCanciones, titulo): laCancionBorrada
const ordenarCancion(lasCanciones, opcion) : cancionOrdenadas
const buscarTextoEnCancion(lasCanciones, texto): lacancion
````

Para testar esta solución:
>npm install

>node app
>+ add --titulo="..." --cuerpo="..."
>+ remove --titulo="..."
>+ sort --criterio="..."
>+ find --texto="..."