'use strict'

/**
 * Que nos diga si un numero es par o impar.
 * 1-Ventana prompt (en caso de no ser valido se vuelva a pedir el numero)
 */

var numero = parseInt(prompt('Ingresa tu numero',2))

while(isNaN(numero)){
    numero = parseInt(prompt('Ingresa tu numero',2))
}

if(numero % 2 == 0){
    console.log(`Tu numero es par`)
    alert('Tu numero es par')
}else{
    console.log(`Tu numero es impar`)
    alert('Tu numero es impar')
}