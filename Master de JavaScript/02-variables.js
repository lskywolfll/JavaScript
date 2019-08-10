// Al poner esto, me obliga declarar las variables ya que en javaScript podemos omitir el uso del var(variable global) y let(variable local)
'use strict'

// Variables
// Una variable es un contenedor de informacion

var pais = 'Chile';
var continente = 'Latino america';
var antiguedad = 2019;
var pais_y_continente = `Vivo en ${pais} de ${continente} año ${antiguedad}`;

console.log(pais_y_continente);

// Let y var
var numero = 40;

if(true){
    // Let, limita el acceso a solamente donde se ha definido en este caso a una funcion, fuera de la funcion no existiria esta variable
    // Si usamos var numero o numero y le asignamos un valor, ese valor ingresado sera para la variable definida anteriormente siendo el numero, dando como valor final ya no 40 sino 50 en este caso var numero = 50 u numero = 50
    let numero = 50;
    console.log(numero);
}

console.log(numero);

// Constante
// Valor que jamas puede ser cambiado, siempre sera el valor que se le haya asignado

var web = "https://victorroblesweb.es";
const ip = "192.88.0.12";

web = "https://victorroblescursos.es";

console.log(web,ip);

