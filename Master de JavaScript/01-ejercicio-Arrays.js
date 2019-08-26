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
// var limite = 0;
// var numeros = [];

// for (let index = 0; index < 6; index++) {
//     let elemento = parseInt(prompt('Introduce tu numero', 0));
//     numeros.push(elemento);
//     console.log(elemento);
// }

// var ordenanzas = ['Sin ordenar', 'Ordenados', 'Alrevez']

// for (let indice = 0; indice < ordenanzas.length; indice++) {
//     const element = ordenanzas[indice];
//     if (element == 'Sin ordenar') 
//     {
//         document.write(element);
//         document.write('<ul>');
//         for (const ubicacion in numeros) {
//             if (numeros.hasOwnProperty(ubicacion)) {
//                 const element = numeros[ubicacion];
//                 document.write(`<li>Elemento dentro de la cajita ${element}</li>`)
//                 console.log(element);
//             }
//         }
//         document.write('</ul>');
//     }
//     else if(element == 'Ordenados')
//     {
//         var ordenInverso = numeros.sort();

//         document.write(element);
//         document.write('<ul>');
//         for (const ubicacion in numeros) {
//             if (numeros.hasOwnProperty(ubicacion)) {
//                 const element = numeros[ubicacion];
//                 document.write(`<li>Elemento dentro de la cajita ${element}</li>`)
//                 console.log(element);
//             }
//         }
//         document.write('</ul>');
//     }
//     else
//     {
//         var ordenBueno = numeros.reverse();
//         document.write(element);
//         document.write('<ul>');
//         for (const ubicacion in numeros) {
//             if (numeros.hasOwnProperty(ubicacion)) {
//                 const element = numeros[ubicacion];
//                 document.write(`<li>Elemento dentro de la cajita ${element}</li>`)
//                 console.log(element);
//             }
//         }
//         document.write('</ul>');
//     }
// }

// document.writeln(`Elementos que contiene nuestra cajita es: ${numeros.length}`)

// var buscar = parseInt(prompt('Introduce un numero para ver si existe',0));

// if(numeros.indexOf(buscar) > -1){
//     alert(`Tu numero ingresado ${buscar} si existe y esta ubicado en la posicion ${numeros.indexOf(buscar)}`)
// }else{
//     alert('Tu numero no existe saquese');
// }

// Solucion de victor

// Pedir 6 numeros
var numeros2 = [];

for (let indice = 0; indice <= 5; indice++) {
    numeros2.push(parseInt(prompt('Introduce un numero', 0)));
}

// Mostrar en el cuerpo de la pagina
function mostrarArray(elementos, textoCustom = "") {
    document.write(`<h1>Contenido del array ${textoCustom}</h1>`);
    document.write("<ul>")
    elementos.forEach((elemento, index) => {
        document.write(`<li>${elemento}</li>`)
    });
    document.write("</ul>")
}

// Ordenar y mostrar
numeros2.sort( (a,b) => a - b);

mostrarArray(numeros2,'Ordenado');

// Invertir y mostrar
numeros2.reverse();
mostrarArray(numeros2,'Revertido');

//Cuantos elementos tiene un array
document.write(`Elementos del array: ${numeros2.length} elementos`);

// Busqueda al usuario una pregunta de que quiere encontrar en una posicion
var busqueda = parseInt(prompt('Busca un numero',0));
var buscado = numeros2.findIndex( posicion => posicion == busqueda);

if(buscado && buscado != -1){
    document.write('<hr><h1>Elemento encontrado!!!</h1>');
    document.write(`<h1>Posicion de la busqueda: ${buscado}</h1><hr>`);
}else{
    document.write(`<h1>Elemento no encontrado</h1>`);
}