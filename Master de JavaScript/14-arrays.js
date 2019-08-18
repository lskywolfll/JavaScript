'use strict'

// Arrays o arreglos de datos, cajitas donde inserto datos,Matrices
// Colecciones de datos osea yo tengo una caja donde quiero dejarle un lapiz,cuaderno y etc
// Yo puedo una cajita dentro de otra cajita podemos guardar lo que sea en ella
// Un punto a tener en cuenta es que cuando nosotros queremos tomar un dato o valor de nuestra cajita nosotros tenemos que indicarle en que posicion se encuentra este valor
// El primer valor esta en la posicion 0 y la final es la cantidad de valores - 1
// Practicamente se puede ver como que ya inserto 1 valor(lapiz) y le resto 1 entonces queda en la posicion 0 que la inicial

var nombre = 'René Sanchez'
var nombres = ['René Sanchez','Juan lopez','Manolo Paolo','Jose Martin',52,true];

var lenguajes = new Array('PHP','JS','Go','Java');

console.log(nombres);
console.log(lenguajes);

// Quiero tener el tercer nombre seria en la posicion 2
console.log(nombres[2]) //Manolo Paolo
// Quiero tener el lenguaje de POO(Programacion orientada a objetos) java
// Podemos usar la propiedad de length, que va a contar todos los datos que tenemos de forma normal osea no le resta 1 ya eso es de nosotros para pensar en su funcionamiento
// Entonces ponemos la cantidad total de valores y le restamos 1 para obtener el ultimo valor que en este caso es java
console.log(lenguajes[lenguajes.length - 1]);