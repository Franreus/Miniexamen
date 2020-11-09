const { crear: crearCancion, borrar: borrarCancion, ordenarCancion, buscarCancion } = require('./notas')

const yargs = require('yargs')

/* crearCancion('cancion','autor') */

yargs.command({
    command: 'add',
    describe: 'añadir cancion',
    builder: {
        titulo: {
            alias: 't',
            describe: 'el titulo',
            demandOption: true,
            type: 'string'
        },
        artista: {
            alias: 'c',
            describe: 'el artista',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        crearCancion(argv.titulo, argv.artista)
    }
})

yargs.command({
    command: 'remove',
    describe: 'borrar cancion',
    builder: {
        titulo: {
            describe: 'titulo',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        borrarCancion(argv.titulo)
    }
})

yargs.command({
    command: 'sort',
    describe: 'ordenar cancion',
    builder: {
        criterio: {
            describe: 'título o artista',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        ordenarCancion(argv.criterio)
    }
})

yargs.command({
    command: 'find',
    describe: 'buscar texto en notas',
    builder: {
        texto: {
            describe: 'texto a buscar',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        buscarCancion(argv.texto)
    }
})

yargs.parse()
