// const argv = require('yargs').argv;
const color = require('colors');

// importamos argv configurado
const argv = require('./config/yargs').argv;

// console.log(argv);

// obtenemos el parametro de la posicion del array 0
let comando = argv._[0];

// en base al comando que pasemos por parametro realizaremos una tarea
switch (comando) {
    case 'crear':
        console.log("Crear tarea por hacer");
        break;
    case 'listar':
        console.log("Listar tareas por hacer");
        break;
    case 'actualizar':
        console.log("Actualizar tareas por hacer");
        break;
    default:
        console.log("Comando no reconocido".red);
        break;
};