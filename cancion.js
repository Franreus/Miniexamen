const fs = require('fs')
const chalk = require('chalk')

/* console.log('hola')
console.log(chalk.red.inverse('hola')) */

const leerCancion = (fichero)=>{
    try {
        const buffer = fs.readFileSync(fichero)
        const datosString = buffer.toString()
        return JSON.parse(datosString)
    } catch (error) {
        console.log(error)
        return []
    }
}

const escribirCancion=(fichero, cancion)=>{
    const textoJSON = JSON.stringify(cancion)
    fs.writeFileSync(fichero, textoJSON)
}

const crearCancion =  (titulo, artista) => {

    const cancion = leerCancion('notas.json')

    // buscar si existe la cancion
    const indice = cancion.findIndex(
         (cancion) => cancion.titulo == titulo
    )
    if (indice === -1) {
        console.log(chalk.green.inverse('cancion creada'))
        notas.push({ titulo: titulo, artista }) // cuerpo:cuerpo
        escribirCancion('cancion.json', cancion)
    } else {
        console.log(chalk.red.inverse('Cancion ya existente'))
    }
}

const borrarCancion = (titulo)=> {

    const cancion = leerCancion('cancion.json')

    const indice = cancion.findIndex( (cancion)=> cancion.titulo === titulo)
    if (indice === -1) {
        console.log('Cancion no encontrada')
    } else {
        console.log('Cancion borrada')
        notas.splice(indice, 1)
        escribirCancion('cancion.json', notas) // notas tiene un elemento menos
    }
}

const borrarCancion2 = (titulo) => {
    const cancion = leerCancion('cancion.json')

    const cancionFiltradas = cancion.filter( (cancion)=> cancion.titulo !== titulo)
    if (cancion.length > cancionFiltradas.length) {
        console.log(chalk.green.inverse('cancion borrada'))
        escribirCancion('cancion.json', cancionFiltradas)
    } else {
        console.log(chalk.red.inverse('Cancion no se puede borrar porque no existe'))
    }
}

const ordenarCancion = (opcion) => {
    const cancion = leerCancion('cancion.json')
    /* opcion: titulo, artista */
    if (opcion === 'titulo') {
        cancion.sort( (cancionA, cancionB) => {
            debugger
            if (cancionA.titulo.toLowerCase() < cancionB.titulo.toLowerCase()) {
                return -1
            } else if (cancionA.titulo.toLowerCase() > cancionB.titulo.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        cancion.sort( (cancionA, cancionB) => {
            if (cancionA.artista.toLowerCase() < cancionB.artista.toLowerCase()) {
                return -1
            } else if (cancionA.artista.toLowerCase() > cancionB.artista.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
    escribirCancion('cancion.json', cancion)
}

const ordenarCancion2 = (opcion) => {
    const cancion = leerCancion('cancion.json')
    cancion.sort( (cancionA, cancionB) => {
        if (cancionA[opcion].toLowerCase() < cancionB[opcion].toLowerCase()) {
            return -1
        } else if (cancionA[opcion].toLowerCase() > cancionB[opcion].toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
    escribirCancion('cancion.json', cancion)
}

const buscarCancionEnNotas = (texto) => {
    const cancion = leerCancion('cancion.json')

    const cancionEncontrada = cancion.find( (cancion) => {
        return cancion.titulo.toLowerCase().includes(texto.toLowerCase()) || cancion.cuerpo.toLowerCase().includes(texto.toLowerCase())
    })

    if(cancionEncontrada){
        console.log(chalk.green.inverse('Cancion encontrada'))
        console.log(cancionEncontrada)
    } else {
        console.log(chalk.red.inverse('No se encuentra la cancion'))
    }
}

module.exports = {
    crear: crearCancion,
    borrar: borrarCancion2,
    ordenarCancion,
    buscarCancionEnNotas
}