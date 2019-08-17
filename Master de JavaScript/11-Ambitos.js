'use strict'

// Una variable se comporta como un objeto osea podemos usar todos los metodos creados para un objeto
// Cuando me refiero a metodos son las funciones ya creadas que hacen alguna accion como saber cuan largo es (lenght), intercambiar el dato por algun otro y etc
// Tenemos todos los metodos de los objetos a nuestra disposicion para usarlos a nuestra convenencia cuando usamos variables globales y locales

var texto = 'Hola tio, te hablo desde un entorno global (var)';

function holaMundo(mensaje){
    var hola_mundo = 'Texto dentro de una funcion';
    console.log(mensaje);
    // Podemos usar typeof para que nos diga por consola si el tipo de dato es texto(string) o numero(number)
    // variable.metodo(), en este ejemplo comvierte el numero en un texto que este metodo lo tienen los objetos
    console.log(numero.toString());
    console.log(hola_mundo);
}

// Aqui nos tira un error al tratar de imprimir por consola el texto que tiene una variable dentro de la funcion
// Esa variable esta viva solo dentro de la funcion osea no esta viva o no tiene vida si tratamos de ir a ella sin estar dentro de la funcion
// Por ende no tenemos a acceso total a los datos creados dentro de la propia funcion de una forma externa, no puedo acceder o obtener un dato que no existe ojo fuera de esta funcion y si podemos dentro de la funcion
// En simples estamos limitados a que es dato creado en nuestra funcion viva solo allí y tener en cuenta que no son los parametros, esto es una nueva mini-cajita donde creamos un valor en el cual nose puede acceder jamas a excepcion de hacer todas las cosas que queramos dentro de ella
// console.log('Hola es: ' + hola_mundo);
var numero = 12;

holaMundo(texto);