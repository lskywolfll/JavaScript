'use strict'

// JavaScript Object Notation

var pelicula = {
    title: 'Batman vs SuperMan',
    year: 2017,
    country: 'Estados unidos'
};

var peliculas = [{title: "La verdad duele",year:2016,country: "Francia"},pelicula]

console.log(peliculas);

var caja_peliculas = document.querySelector('#peliculas');
for (const indice in peliculas) {
    if (peliculas.hasOwnProperty(indice)) {
        const element = peliculas[indice];
        var p = document.createElement('p');
        p.append(element.title + " - " + element.year);
        caja_peliculas.append(p);
    }
}