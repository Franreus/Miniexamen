/*
    APLICACIÓN EXAMEN
    
*/
const fs = require('fs')

const leerCanciones = (fichero)=>{
    try {
        const buffer = fs.readFileSync(fichero)
        const datosString = buffer.toString()
        return JSON.parse(datosString)
    } catch (error) {
        console.log(error)
        return []
    }
}

const escribirCanciones=(fichero, datos)=>{
    const textoJSON = JSON.stringify(datos)
    fs.writeFileSync(fichero, textoJSON)
}

const añadirCancion = (cancion) => {
    const canciones = leerCanciones('canciones.json')

    // buscar si existe la nota
    const indice = canciones.findIndex(
         (_cancion) => _cancion.nombre == cancion.nombre
    )
    if (indice === -1) {
        console.log(`Se ha añadido la cancion: ${cancion.nombre}`)
        canciones.push({nombre: cancion.nombre, artista: cancion.artista, anyo: cancion.anyo}) // cuerpo:cuerpo
        escribirCanciones('canciones.json', canciones)
    } else {
        console.log(`La canción ${cancion.nombre} ya existe en la lista de canciones.`)
        //console.log(chalk.red.inverse('Nota ya existente'))
    }
}

const leerCancion = (titulo) => {
    const canciones = leerCanciones('canciones.json')

    const cancionEncontrada = canciones.find((cancion) => {
        return cancion.nombre.toLowerCase() === titulo.toLowerCase()
    })

    if(cancionEncontrada){
        //console.log(chalk.green.inverse('Nota encontrada'))
        console.log(cancionEncontrada);
    } else {
        console.log(`No se ha encontrado la canción: ${titulo}`);
        //console.log(chalk.red.inverse('No se encuentra la nota'))
    }
}

const editarArtista = (titulo, nuevoArtista) => {
    const canciones = leerCanciones('canciones.json')

    const indice = canciones.findIndex((cancion)=> cancion.nombre.toLowerCase() === titulo.toLowerCase())
    if (indice === -1) {
        console.log(`No se ha encontrado la canción: ${titulo}`);
    } else {
        const _cancion = canciones.splice(indice, 1)
        canciones.push({nombre: `${_cancion[0].nombre}`, artista: `${nuevoArtista}`, anyo: `${_cancion[0].anyo}`});
        console.log(`Editado autor de la cancion ${_cancion[0].nombre} por ${nuevoArtista}`);
        escribirCanciones('canciones.json', canciones)
    }
}

const borrarCancion = (titulo) => {
    const canciones = leerCanciones('canciones.json')

    const indice = canciones.findIndex((cancion)=> cancion.nombre.toLowerCase() === titulo.toLowerCase())
    if (indice === -1) {
        console.log(`No se ha encontrado la canción: ${titulo}`);
    } else {
        const _cancion = canciones.splice(indice, 1)
        console.log(`Borrada la canción ${_cancion[0].nombre}`);
        escribirCanciones('canciones.json', canciones)
    }
}

const listarCanciones = () => {
    const canciones = leerCanciones('canciones.json')
    canciones.forEach((cancion, index) => {
        console.log(`${index+1}. ${cancion.nombre} ( ${cancion.anyo} ) de ${cancion.artista}`);
    });
    //console.log(JSON.stringify(canciones));
}

const ordenarCanciones = (tipo) => {
    const canciones = leerCanciones('canciones.json')
    if (tipo === 'artista') {
        canciones.sort( (cancionA, cancionB) => {
            debugger
            if (cancionA.artista.toLowerCase() < cancionB.artista.toLowerCase()) {
                return -1
            } else if (cancionA.artista.toLowerCase() > cancionB.artista.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        canciones.sort( (cancionA, cancionB) => {
            if (cancionA.anyo.toLowerCase() < cancionB.anyo.toLowerCase()) {
                return 1
            } else if (cancionA.anyo.toLowerCase() > cancionB.anyo.toLowerCase()) {
                return -1
            } else {
                return 0
            }
        })
    }
    //escribirCanciones('notas.json', canciones)
    console.log(JSON.stringify(canciones));
}

module.exports = {
    añadirCancion,
    leerCancion,
    editarArtista,
    borrarCancion,
    listarCanciones,
    ordenarCanciones
}