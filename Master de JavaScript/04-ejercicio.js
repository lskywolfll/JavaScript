'use strict'

/**
 * Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
 */

var inicio = parseInt(prompt('Ingresa tu primer numero', 2));
var final = parseInt(prompt('Ingresa tu segundo numero', 5));

document.write(`Los numeros impares desde ${inicio} hasta ${final} son: `);
// Solucion propia
// for (let i = inicio; i < final; i++) {
//     if (i % 2 != 0) {
//         document.write(`<br> Numero impar: ${i}`);
//         console.log(i);
//     }
// }

// Solucion dada por el curso, mas simple aun no se me habia ocurrido hacerlo de esta forma aun que pense hacerlo en un while pero como sabia los limites preferi usar el for ya que para eso esta cuando sabemos el fin
while (inicio < final) {
    inicio++;

    if (inicio % 2 != 0) {
        document.write(`<br>El ${inicio} es impar`);
    }
}