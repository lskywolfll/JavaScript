'use strict'

/**
 * Tabla de multiplicar de un numero introducido por pantalla
 */

var multiplicacion = parseInt(prompt('Ingresa tu numero para darte tu tabla de multiplicacion', 2))

document.write(`Tu tabla del ${multiplicacion} es: `)
for (let i = 1; i <= 12; i++) {

    let resultado = multiplicacion * i;

    console.log(`Tabla ${i}: resultado de ${multiplicacion} * ${i} es = ${resultado}`)

    document.write(`<br>Tabla ${i}: resultado de ${multiplicacion} * ${i} es = ${resultado}`)
}