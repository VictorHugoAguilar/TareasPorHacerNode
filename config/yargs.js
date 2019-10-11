const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer',
};

const completado = {
    alias: 'c',
    demand: false,
    default: true,
    desc: 'Marca como completado o pendiente la tarea',
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion: descripcion,
    })
    .command('listar', 'Listar las tareas por hacer')
    .command('actualizar', 'Actualiza las tareas por hacer', {
        descripcion: descripcion,
        completado: completado,
    })
    .command('borrar', 'Borrar una tarea por hacer', {
        descripcion: descripcion,
    })
    .help()
    .argv;

// exportamos la función para utilizarla en cualquier componente que se la necestie
module.exports = {
    argv: argv
};