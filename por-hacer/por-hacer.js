const fs = require('fs');
const color = require('colors');

// creamos un array vacio
let listadoPorHacer = [];

const crear = (descripcion) => {

    // CARGAMOS LA BASE DE DATOS
    cargarDB();

    // Configuramos el objeto
    let porHacer = {
        descripcion: descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se ha podido grabar', err);
        }
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    // console.log(listadoPorHacer);
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    // cargamos la bd para cargar la variable listadoPorHacer si no estaria vacia
    cargarDB();

    // recorremos la lista de tareas por hacer y devolvemos la posicion con findIndex
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })



}


module.exports = {
    crear: crear,
    getListado: getListado
}