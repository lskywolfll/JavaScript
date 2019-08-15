'use strict'

/**
 * Muestre todos los numeros divisores de un numero introducido en un prompt
 */

var divisor = parseInt(prompt('Ingresa tu numero',2))

for (let i = 0; i <= divisor; i++){
    if (divisor % i == 0) {
        console.log(`El numero divisor es ${i}`)
    }
}