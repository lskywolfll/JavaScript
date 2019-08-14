'use strict'

/**
 * Hace un programa que muestre todos los numero entre dos numeros introducidos por el usuario
 */

var inicio = parseInt(prompt('Ingresa el primer numero',0));
var final = parseInt(prompt('Ingresa tu segundo numero',0));

document.write(`<h1>De ${inicio} a ${final} estan estos numeros: `)
for(let i = inicio; i <= final; i++){
    document.write(i + "</br>");
}
// 