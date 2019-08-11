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

/**
 * Operadores logicos
 * AND(y): &&
 * OR(o): ||
 * NOT(no): !
 */

 var year = 2019;
// NOT, Negacion por ej: mientra el año no sea igual a 2016 ejecutame esto o corre esta funcion todo esto radica a que debe hacer el programa al dejarle esta negacion a un valor u condicion que nosotros le damos
 if(year != 2016){
     console.log('El año no es 2016')
 }

//  AND, consiste en que se deba cumplir 2 codiciones para poder ejecutar algo y si solamente tiene uno entonces no se ejecutara ya que el &&(and) exige tener ambas para poder funciones de acuerdo a lo que queremos hacer
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual")
}else{
    console.log("Estamos en la era post moderna")
}

// OR, consiste en dejarle opciones a nuestra funcion no tiene por que ser todas las condiciones pasadas bien si no que puede hacer esto si se cumple una funcion u otra, sin importa que no todas esten funcionando o se cumplan las condiciones dadas
// Podemos agregar parentesis para nosotros agregar aun mas condiciones a una opcion que creamos con el or por ej: year == 2008 ||(or) (year == 2019 ||year < 2020 || year >= 2008) de esta forma nos damos cuentas que ademas de pdoer indicar mas condiciones nosotros podemos con el parentesis que es mas importante que otras, osea lo primero que hara dentro de la funcion es cumplir con el parentesis creado ya que tiene mas importancia
if(year == 2008 || year == 2019){
    console.log("El año acaba en 9");
}