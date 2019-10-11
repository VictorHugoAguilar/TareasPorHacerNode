const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripciond de la tarea por hacer',
        }
    })
    .command('listar', 'Listar las tareas por hacer', {
        tarea: {
            alias: 't',
            demand: false
        }
    })
    .command('actualizar', 'Actualiza las tareas por hacer', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripciond de la tarea por hacer',
        },
        completado: {
            alias: 'c',
            demand: false,
            default: true,
            desc: 'Marca como completado o pendiente la tares'
        }
    })
    .help()
    .argv;


// exportamos la función para utilizarla en cualquier componente que se la necestie
module.exports = {
    argv: argv
}