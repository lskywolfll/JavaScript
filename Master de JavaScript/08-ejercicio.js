'use strict'

/**
 * Calculadora que pida dos numeros por pantalla
 * -Si metems uno mal que nos lo vuelva a pedir ambos numeros
 * -en el body de la pagina, en una alerta y por consola el resultado de sumar,restar,multiplicar y dividir las dos cifras
 */

var primerNumero = parseInt(prompt('Ingresa tu primer numero',1));
var segundoNumero = parseInt(prompt('Ingresa tu segundo numero', 2));

while(isNaN(primerNumero) || isNaN(segundoNumero) || primerNumero < 0 || segundoNumero < 0){
    primerNumero = parseInt(prompt('Ingresa tu primer numero',1));
    segundoNumero = parseInt(prompt('Ingresa tu segundo numero', 2));
}

var suma = primerNumero + segundoNumero;
var resta = primerNumero - segundoNumero;
var multiplicacion = primerNumero * segundoNumero;
var division = primerNumero / segundoNumero;

var imprimirBody = `Suma: ${suma} <br> Resta: ${resta} <br> Multiplicacion: ${multiplicacion} <br> Division: ${division}`;

var imprimirConsola = `Suma: ${suma} Resta: ${resta} Multiplicacion: ${multiplicacion} Division: ${division}`;

var imprimirAlerta = `Suma: ${suma}\nResta: ${resta}\nMultiplicacion: ${multiplicacion}\nDivision: ${division}`;

document.write(imprimirBody);

alert(imprimirAlerta);

console.log(imprimirConsola);