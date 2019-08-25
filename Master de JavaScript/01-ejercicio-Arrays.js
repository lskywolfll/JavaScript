'use strict'

/**
 * 1. Pida 6 numeros por pantalla y los meta en un array(cajita)
 * 2. Mostrar el array entero(todo los elementos dentro del array) en el cuerpo de la pagina(body) y la consola
 * 3. Ordenarlos y mostrarlos
 * 4. Invertir el orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array
 * 6. Busqueda de un valor introducido por el usuario, que nos diga si existe en el array y diga su posicion(indice)
 */

var limite = 0;
var numeros = [];

for (let index = 0; index < 6; index++) {
    let elemento = parseInt(prompt('Introduce tu numero', 0));
    numeros.push(elemento);
    console.log(elemento);
}

var ordenanzas = ['Sin ordenar', 'Ordenados', 'Alrevez']

for (let indice = 0; indice < ordenanzas.length; indice++) {
    const element = ordenanzas[indice];
    if (element == 'Sin ordenar') 
    {
        document.write(element);
        document.write('<ul>');
        for (const ubicacion in numeros) {
            if (numeros.hasOwnProperty(ubicacion)) {
                const element = numeros[ubicacion];
                document.write(`<li>Elemento dentro de la cajita ${element}</li>`)
                console.log(element);
            }
        }
        document.write('</ul>');
    }
    else if(element == 'Ordenados')
    {
        var ordenInverso = numeros.sort();

        document.write(element);
        document.write('<ul>');
        for (const ubicacion in numeros) {
            if (numeros.hasOwnProperty(ubicacion)) {
                const element = numeros[ubicacion];
                document.write(`<li>Elemento dentro de la cajita ${element}</li>`)
                console.log(element);
            }
        }
        document.write('</ul>');
    }
    else
    {
        var ordenBueno = numeros.reverse();
        document.write(element);
        document.write('<ul>');
        for (const ubicacion in numeros) {
            if (numeros.hasOwnProperty(ubicacion)) {
                const element = numeros[ubicacion];
                document.write(`<li>Elemento dentro de la cajita ${element}</li>`)
                console.log(element);
            }
        }
        document.write('</ul>');
    }
}

document.writeln(`Elementos que contiene nuestra cajita es: ${numeros.length}`)

var buscar = parseInt(prompt('Introduce un numero para ver si existe',0));

if(numeros.indexOf(buscar) > -1){
    alert(`Tu numero ingresado ${buscar} si existe y esta ubicado en la posicion ${numeros.indexOf(buscar)}`)
}else{
    alert('Tu numero no existe saquese');
}