'use strict'

// Operadores
var numero1 = 7;
var numero2 = 12;

var operacion = numero1 + numero2;

alert(`El resultado de la operacion es: ${operacion}`)

// Tipos de datos
// int => enteros
var numero_entero = 55;
// String => texto
var cadena_texto = 'hola';
// Booleanos => verdadero o falso
var verdadero_o_falso = true;
// texto
var numero_falso = '13';

console.log(cadena_texto);
console.log(verdadero_o_falso);
// Number(variable) => con number nosotros podemos convertir los numero que este en el texto a un numero entero u decimal ej: var numero_falso = '13' console.log(Number(numero_falso) + 7) = 20, si no estubiera el number quedaria 137 pero en texto sin ser numerico
console.log(Number(numero_falso) + 7);

// Saber el tipo de dato usando typeof
console.log(typeof numero_falso);