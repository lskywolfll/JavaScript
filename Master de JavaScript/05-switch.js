'use strict'

// Switch
// es una forma de no tener que usar tantos if y else para cada momento, por eso esta nueva funcion nos permite establecer condiciones respectiva mas sencillas pero con sus limitaciones.
// Solo evaluaremos un valor en concreto para manipular todas los valores que pueden ser y establecer una accion en si para ello

var edad = 18;
var imprime = '';

// switch (valor)
switch (edad) {
    // case valor:(en este punto nosotros indicamos ya el valor definitivo que puede tener en un caso)
    case 18:
        // Codigo de siempre a lo que nosotros queramos hacer
        imprime = 'Acabas de cumplir la mayoria de edad'
        // Siempre se finaliza con un break para pasar a la siguiente sentencia
        break;
    case 25:
        imprime = 'Ya eres un adulto'
        break;
    case 40:
        imprime = 'Crisis de los 40, rili ?'
        break;
    case 75:
        imprime = 'Eres alguien perseguirdor de salud extrema adelante ganador'
        break;
    // default siempre se ejecutara si no tiene valor alguno
    default:
        imprime = 'Tu edad es neutra'
        break;
}

console.log(imprime);