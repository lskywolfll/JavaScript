'use strict'

/**
 * 1. Pida 6 numeros por pantalla y los meta en un array(cajita)
 * 2. Mostrar el array entero(todo los elementos dentro del array) en el cuerpo de la pagina(body) y la consola
 * 3. Ordenarlos y mostrarlos
 * 4. Invertir el orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array
 * 6. Busqueda de un valor introducido por el usuario, que nos diga si existe en el array y diga su posicion(indice)
 */

//  Solucion Mia
var limite = 0;
var numeros = [];

function escribirEnPagina(cajita,ordenamiento = "") {
    document.write(`Listamiento de los elementos de nuestra cajita ${ordenamiento}`);
    document.write('<ul>');
    for (const posicion in cajita) {
        if (cajita.hasOwnProperty(posicion)) {
            const element = cajita[posicion];
            document.write(`<li>Elemento encontrado: ${element}</li>`);
            // Test
            console.log(element);
        }
    }
    document.write('</ul>');
}

for (let index = 0; index < 6; index++) {
    let elemento = parseInt(prompt('Introduce tu numero', 0));
    if(elemento == null || isNaN(elemento)){
        elemento = parseInt(prompt('Introduce un numero valido', 0));
    }else{
        numeros.push(elemento);
        console.log(elemento);
    }
}

var ordenanzas = ['Sin ordenar', 'Ordenados', 'Alrevez']

for (let indice = 0; indice < ordenanzas.length; indice++) {
    const opcion = ordenanzas[indice];
    if(opcion == 'Sin ordenar')
    {
        escribirEnPagina(numeros,opcion);
    }
    else if(opcion == 'Ordenados')
    {
        // Ordena solamente en base al primer digito del numero en este caso y al igual que en letras por orden alfabetico
        var ordenado = numeros.sort( (primerNumero,segundoNumero) => primerNumero - segundoNumero);
        escribirEnPagina(ordenado,opcion);
    }
    else
    {
        var inverso = numeros.reverse();
        escribirEnPagina(inverso,opcion);
    }
}

document.writeln(`<hr>Elementos que contiene nuestra cajita es: ${numeros.length}`)

var buscar = parseInt(prompt('Introduce un numero para ver si existe',0));

var comprobacion = numeros.findIndex( posicion => posicion == buscar);

if(comprobacion > -1){
    document.write(`<hr>Tu numero ingresado ${buscar} si existe y esta ubicado en la posicion ${numeros.indexOf(buscar)}`);
}else{
    document.write('<hr>Tu numero no existe saquese');
}

// Solucion de victor

// Pedir 6 numeros
// var numeros2 = [];

// for (let indice = 0; indice <= 5; indice++) {
//     numeros2.push(parseInt(prompt('Introduce un numero', 0)));
// }

// // Mostrar en el cuerpo de la pagina
// function mostrarArray(elementos, textoCustom = "") {
//     document.write(`<h1>Contenido del array ${textoCustom}</h1>`);
//     document.write("<ul>")
//     elementos.forEach((elemento, index) => {
//         document.write(`<li>${elemento}</li>`)
//     });
//     document.write("</ul>")
// }

// // Ordenar y mostrar
// numeros2.sort( (a,b) => a - b);

// mostrarArray(numeros2,'Ordenado');

// // Invertir y mostrar
// numeros2.reverse();
// mostrarArray(numeros2,'Revertido');

// //Cuantos elementos tiene un array
// document.write(`Elementos del array: ${numeros2.length} elementos`);

// // Busqueda al usuario una pregunta de que quiere encontrar en una posicion
// var busqueda = parseInt(prompt('Busca un numero',0));
// var buscado = numeros2.findIndex( posicion => posicion == busqueda);

// if(buscado && buscado != -1){
//     document.write('<hr><h1>Elemento encontrado!!!</h1>');
//     document.write(`<h1>Posicion de la busqueda: ${buscado}</h1><hr>`);
// }else{
//     document.write(`<h1>Elemento no encontrado</h1>`);
// }