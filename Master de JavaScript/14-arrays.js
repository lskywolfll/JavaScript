'use strict'

// Arrays o arreglos de datos, cajitas donde inserto datos,Matrices
// Colecciones de datos osea yo tengo una caja donde quiero dejarle un lapiz,cuaderno y etc
// Yo puedo una cajita dentro de otra cajita podemos guardar lo que sea en ella
// Un punto a tener en cuenta es que cuando nosotros queremos tomar un dato o valor de nuestra cajita nosotros tenemos que indicarle en que posicion se encuentra este valor
// El primer valor esta en la posicion 0 y la final es la cantidad de valores - 1
// Practicamente se puede ver como que ya inserto 1 valor(lapiz) y le resto 1 entonces queda en la posicion 0 que la inicial

var nombre = 'René Sanchez'
var nombres = ['René Sanchez', 'Juan lopez', 'Manolo Paolo', 'Jose Martin', 52, true];

var lenguajes = new Array('PHP', 'JS', 'Go', 'Java');

console.log(nombres);
console.log(lenguajes);

// Quiero tener el tercer nombre seria en la posicion 2
console.log(nombres[2]) //Manolo Paolo
// Quiero tener el lenguaje de POO(Programacion orientada a objetos) java
// Podemos usar la propiedad de length, que va a contar todos los datos que tenemos de forma normal osea no le resta 1 ya eso es de nosotros para pensar en su funcionamiento
// length (largo o cantidad de valores) cajita = [1,2,3] entonces pongamosnos en el caso que yo quiero tener la cantidad de cosas en mi cajita entonces usare el metodo cajita.length que si lo imprimo por consola me dara: 3, por que tengo 3 cositas en total en mi cajita asi de facil sirve pero tener ojo en el punto anterior
// Entonces ponemos la cantidad total de valores y le restamos 1 para obtener el ultimo valor que en este caso es java
console.log(lenguajes[lenguajes.length - 1]);

// Pedir una posicion por el navegador y con el nosotros darle lo que contiene en esa ubicacion tener en cuenta que la primera ubicacion de la cajita empieza con el 0 en adelante
// Tener en cuenta la forma en la cual nosotros indicamos al usuario que elemento quiere ver lo que contiene, en este punto para nosotros es facil somos el desarrollador pero no el usuario.... osea no tiene ni idea de lo que tenemos aqui ya que en primer lugar simplemente le pedimos un numero de lo que quiere sacar podemos simplemente indicar hasta que numero puede ingresar y con ello ahorramos algunos problemas al que el usuario no sepa lo que esta realmente haciendo o por que razon funciona u resuelve nuestro sistema que hemos creado
var ubicacion = parseInt(prompt('Que elemento de la cajita quieres ??', 0));

if(ubicacion >= lenguajes.length){
    alert(`Introduce una ubicacion valida del elemento\nUbicaciones disponibles hasta el numero: ${lenguajes.length}`);
}else{
    alert(`El elemento que has pedido contiene: ${lenguajes[ubicacion]}`);
}

// Mostrar todas las cositas que tenemos en nuestra cajita(array)
/**
 * 1- Necesitamos saber cuantos elementos(cositas) tenemos en nuestra cajita(array)
 * 2- Necesitamos analizar que ciclo nos beneficia mas en este caso si: for,while,do-while
 * 3- Crear la estructura del cual escribira en nuestra pagina todos los elementos de nuestra cajita(array)
 * 4- Vamos a codear!!!!! no... a crear tio joder!!!!!!!!!
 */

// Yo en este caso veo que nos beneficia mas un for que otra cosa ya que conocemos el final por la cantidad de elementos vamos a hacerlo!!
document.write('Lenguajes de programacion disponibles son: ')
// ul => es una lista desordenada por sus siglas del ingles, urdened list
document.write('<ul>');

// for (let i = 0; i < lenguajes.length; i++) {
//     const elemento = lenguajes[i];
//     // li => es un elemento de una lista por sus siglas del ingles, list item
//     document.write(`<li>${elemento}</li>`);
// }

document.write('</ul>')

// Nuevo recorrido en nuestra cajita para ver todos los elementos que contiene la cajita(array), esto nos ahorra la necesidad de usar un for con el cual nosotros tenemos que ingresar todos los datos(variables) y condiciones para recorrerlo.
// En cambio con este forEach nosotros simplificamos todo usando funciones anonimas con arrow functions(funciones de flecha)
// forEach(valor,ubicacion,array(cajita) )
// lenguajes.forEach( (elemento,indice,data) => {
//     document.write(`<li> ${indice} ${elemento} </li>`)
// });

// Recorrer una cajita(array) usando otro tipo de recorrido con un for in
// nosotros creamos una variable que contendra la posicion del elemento en el cual nosotros queremos obtener lo que tiene
for(let ubicacion in lenguajes){
    document.write(`<li> ${lenguajes[ubicacion]} </li>`)
}

// Busquedas
var buscar = prompt('Cual lenguaje quieres buscar ? ', 'PHP')
const BUSQUEDA = lenguajes.find( (lenguaje) => lenguaje == buscar);
// Tambien existe el metodo para encontrar un texto y obtener su indice osea la ubicacion en la que se encuentra en la cajita
lenguajes.findIndex( (lenguaje) => lenguaje == 'PHP' );

if (BUSQUEDA != null) {
    alert(`Se ha encontrado que si existe el lenguaje ${BUSQUEDA} en nuestro sistema :)`);
}

console.log(BUSQUEDA);

// Filtro para comprobar si existen valores mayores,menores o iguales a un valor
var precios = [20,10,50,80,12];
// Me devuelve solamente si es verdadero que el precio que nosotros indiquemos es mayor a 20, osea si existen valores mayores a 20 como dejamos en nuestra condicion
const BUSQUEDA_DE_PRECIOS = precios.some( (precio) => precio >= 20 );

console.log(BUSQUEDA_DE_PRECIOS);
