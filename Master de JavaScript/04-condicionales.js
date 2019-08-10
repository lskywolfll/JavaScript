'use strict'

// Condicional if
// Si A es igual a B, entonces indicar que haga alguna accion

var edad1 = 20;
var edad2 = 19;

if(edad1 > edad2){
    // `` sirve para usar ES6 un estandar nuevo de javaScript que nos permite usar de manera mas legible y sencilla el uso de variables sin concatenar (ej: "la primera edad con"  + edad1).
    // dentro de `` podemos usar ${variable} sin tener que concatenar desde ahora y mejora la facilidad del orden en el cual nosotros le indiquemos NT:Es de lo mejor a la hora de usarlo en textos
    console.log(`La primera edad con ${edad1} años es mayor que la segunda edad con ${edad2} años`);
}else{
    console.log(`La primera edad con ${edad1} años es menor que la segunda edad con ${edad2} años`);
}

// prompt => es basicamente una funcion para pedir datos del usuario desde el navegador, su estructura es de esta forma: prompt(mensaje,(opcional) valor por defecto)
var edad = prompt('¿Que edad tienes ?',"18");
var nombre = 'David Suarez';

/**
 * Operadores relacionales
 * Mayor que: >
 * Menor que: <
 * Mayor o igual: >=
 * Menor o igual: <=
 * Igual: ==
 * Distinto: !=
 */

if(edad >= 18){
    console.log('Es mayor de edad')
    
    // Podemos establecer mas condiciones dentro de una condicion, todo esto depende de lo que nosotros queramos hacer por que no en todas las ocasiones yo tendria o deberia tener una condicion dentro de otra
    // Esto se llama if anidados, osea condicionales dentro de condiciones
    if (edad >= 55) {
        console.log('Es mas mayor de edad')
    }else if(edad >= 80){
        console.log('Es muy mayor de de edad')
    }else{
        console.log('Su edad a sobrepasado los estandares, Salud extrema¡¡')
    }
}else{
    console.log('Es menor de edad')
}