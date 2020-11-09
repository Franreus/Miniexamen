const canciones = require('./canciones.js');
const chalk = require('chalk');

console.log(chalk.black.bgWhite("--- AÑADIR CANCIONES --------------------------------------- "));
canciones.añadirCancion({ nombre: 'start me up', artista: 'the rolling stones', anyo: '1970' });
canciones.añadirCancion({ nombre: 'New York, New York', artista: 'Frank Sinatra', anyo: '1960' });
canciones.añadirCancion({ nombre: 'My Way', artista: 'Frank Sinatra', anyo: '1971' });
canciones.añadirCancion({ nombre: 'Killing me softly', artista: 'Frank Sinatra', anyo: '1972' });
console.log(chalk.black.bgWhite("--- LEER CANCIONES --------------------------------------- "));
canciones.leerCancion(`Dope`);
console.log(chalk.black.bgWhite("--- EDITAR ARTISTAS --------------------------------------- "));
canciones.editarArtista('Frank Sinatra', 'My Way');
console.log(chalk.black.bgWhite("--- LISTAR CANCIONES --------------------------------------- "));
canciones.listarCanciones();
console.log(chalk.black.bgWhite("--- ORDENAR CANCIONES --------------------------------------- "));
canciones.ordenarCanciones('anyo');
