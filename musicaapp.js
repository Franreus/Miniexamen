const canciones = require('./canciones.js');
const chalk = require('chalk');

console.log(chalk.black.bgWhite("--- AÑADIR CANCIONES --------------------------------------- "));
canciones.añadirCancion({ nombre: 'the rolling stones', artista: 'frank sinatra', anyo: '0000' });
canciones.añadirCancion({ nombre: 'ei', artista: 'Hola', anyo: '2000' });
canciones.añadirCancion({ nombre: 'Tra tra', artista: 'La rosalia', anyo: '2002' });
canciones.añadirCancion({ nombre: 'Ni idea', artista: 'C Tangana', anyo: '2004' });
console.log(chalk.black.bgWhite("--- LEER CANCIONES --------------------------------------- "));
canciones.leerCancion(`Dope`);
console.log(chalk.black.bgWhite("--- EDITAR ARTISTAS --------------------------------------- "));
canciones.editarArtista('Linkin park', 'Chester');
console.log(chalk.black.bgWhite("--- LISTAR CANCIONES --------------------------------------- "));
canciones.listarCanciones();
console.log(chalk.black.bgWhite("--- ORDENAR CANCIONES --------------------------------------- "));
canciones.ordenarCanciones('anyo');
