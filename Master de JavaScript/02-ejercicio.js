'use strict'

/**
 * Utilizando un bucle,mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado
 */

var suma = 0;
var media = 0;
var contandor = 0;

do {
    var introducir = parseInt(prompt('Ingresa un numero', 0));
    if(introducir < 0){
        break;
    }
    suma += introducir;
    contandor++;
    // media = suma / contandor;
} while (isNaN(introducir) || introducir > 0);

media = suma / contandor;

alert(`Suma: ${suma} y media: ${media}`)