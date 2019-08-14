'use strict'

/**
 * Programa que pida dos numeros y que nos diga cual es el mayor,menor y si son iguales
 */

var primerNumero = parseInt(prompt('Tu primer numero ?',1));
var segundoNumero = parseInt(prompt('Tu segundo numero', 2));

// if(primerNumero > segundoNumero){
//     alert("Es mayor el primer numero")
// }else if(primerNumero < segundoNumero){
//     alert("Es menor el primer numero")
// }else if(segundoNumero > primerNumero){
//     alert("Es mayor el segundo")
// }else if(segundoNumero < primerNumero){
//     alert("Es menor el segundo")
// }else{
//     alert("Son iguales")
// }

while (primerNumero <= 0 || segundoNumero <= 0 || isNaN(primerNumero) || isNaN(segundoNumero)) {
    primerNumero = parseInt(prompt('Tu primer numero ?',1));
    segundoNumero = parseInt(prompt('Tu segundo numero', 2));
    break;
}

if (primerNumero > segundoNumero) {
    alert(`El primer numero es mayor ${primerNumero}`)
}else if(primerNumero < segundoNumero || segundoNumero > primerNumero){
    alert(`El primer numero ${primerNumero} es menor y el segundo es mayor ${segundoNumero}`)
}else if(primerNumero == segundoNumero){
    alert('Son iguales');
}else{
    alert("No se como pero me superaste en logica tio")
}