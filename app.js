// const argv = require('yargs').argv;
const color = require('colors');

// importamos argv configurado
const argv = require('./config/yargs').argv;

// importamos la lógica del programa
const porHacer = require('./por-hacer/por-hacer');

// console.log(argv);

// obtenemos el parametro de la posicion del array 0
let comando = argv._[0];

// en base al comando que pasemos por parametro realizaremos una tarea
switch (comando) {
    case 'crear':
        // console.log("Crear tarea por hacer");
        let tarea = porHacer.crear(argv.descripcion);
        // console.log(tarea);
        break;
    case 'listar':
        // console.log("Listar tareas por hacer");
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('====== Tareas por hacer ======'.green);
            console.log(tarea.descripcion);
            let estado = tarea.completado ? 'Si' : 'No';
            console.log('Completado: ' + estado);
            console.log('=============================='.green);
        }
        break;
    case 'actualizar':
        console.log("Actualizar tareas por hacer");
        break;
    default:
        console.log("Comando no reconocido".red);
        break;
};