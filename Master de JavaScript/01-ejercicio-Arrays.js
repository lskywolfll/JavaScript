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
const CANTIDAD_DE_NUMEROS = 6;
// A medida que nos ponemos a crear la funcionalidad nos damos cuenta que estamos repitiendo mucho un codigo entonces en ese punto nosotros debemos crear una funcion para que haga siempre esas acciones repetitivas y sus respectivas diferenrencias en algunos casos, en este punto se repetia mucho el uso de la caja conjunto a su recorrido propio para mostrar en pantalla los datos de nuestra cajita e por consola tambien... claro la consola no se salvara de nosotros >:^)
// Por ende siempre cuando veamos que estamos repitiendo mucho el codigo es que estamos haciendo algo mal la idea es crea una vez y usala para que este te lo cree desde la base las veces que quieras sin tener que crear todo el proceso denuevo (inventar la rueda cada vez) por eso es bueno analizar las partes repititvas e crear alguna funcion que haga todo ese proceso para agilizar el desarollo :)
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
// Creamos un ciclo para ingresar en nuestra cajita una cantidad fija de elementos(numeros) por el dicho problema que indicaba en este punto que necesitaba solo 6 numeros en total por consiguiente ya establecemos un dato que no puede cambiar es fijo, en ese punto lo que nosotros deberiamos usar es una constante ya que nunca variaria ni puede ser cambiada dentro del programa mismo solamente desde su contenedor con el valor asignado e cambiarselo a que es una pasada esto cuando vamos entiendo mas a fondo como funcionan las cosas 
for (let index = 0; index < CANTIDAD_DE_NUMEROS; index++) {
    let elemento = parseInt(prompt('Introduce tu numero', 0));
    if(elemento == null || isNaN(elemento)){
        elemento = parseInt(prompt('Introduce un numero valido', 0));
    }else{
        // Pequeña curiosidad sobre el push es que agrega siempre al final osea no es ordenado en base a si es el primer elemento ingresado se quede en la posicion inicial de nuestra cajita por el contrario sino que este lo deja el ultimo ingresado en la posicion inicial :o
        numeros.push(elemento);
        console.log(elemento);
    }
}

var ordenanzas = ['Sin ordenar', 'Ordenados', 'Alrevez']
// Recorrimos nuestra cajita de ordenanzas y aplicamos los criterios correspondientes a ellas
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
// Aqui creamos una funcion anonima de flecha(arrow functions) para que nos encuentre en base a nuestro propio criterio que en este punto es el de buscar lo que ingreso el usuario en una posicion exacta de nuestra cajita en el cual si no llegara a existe este nos devuelve -1
// el primer parametro que se podria decir que tiene el findIndex es el de los valores que contiene nuestra cajita en este caso ya que estamos usando este metodo en la propia cajita(array) y queremos encontrar dicha posicion del valores, por conclusion llegamos que recibe todo los valores e posiciones el dicho parametro cabe destacar que tiene muchas mas utilidades manipulables siendo 3 pero todo depende del problema que nosotros vayamos a resolver
// Por ende solo necesitamos 1 parametro de este para buscar lo que pidio la persona :)
var comprobacion = numeros.findIndex( posicion => posicion == buscar);

if(comprobacion > -1){
    document.write(`<hr>Tu numero ingresado ${buscar} si existe y esta ubicado en la posicion ${comprobacion}`);
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