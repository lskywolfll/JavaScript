'use strict'

// Funciones anonimas
// es el cual donde no le damos nombre a una funcion y ejecuta lo que nosotros le indiquemos

// 2 parametros que son usadas para usarlas en funciones anonimas del cual quiero que haga algun caso de otra forma fuera de la funcion
// 
function suma(numero1,numero2,sumaYmuestra,sumaPorDos){
    let sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

// const suma = (numero1,numero2) => numero1 + numero2;
// Aqui usamos callback para llamar a la funcion que se llama dentro de la funcion suma,es como llamar a la funcion dentro de la misma funcion pero manipulandola de forma distinta con las funciones anonimas para que se comporten de forma distinta
// En este punto el 3 parametro la cual usamos como funcion(Se debe declarar dentro como una funcion e ver si recibira un dato en concreto o no) y queremos imprimir por consola el resultado de esa suma con la funcion creada dentro de la suma
// El 4 parametro nosotros queremos usar un callback(funcion anonima dentro de la misma funcion creada en la suma(dentro de la misma funcion)) para que imprima en pantalla el resultado * 2
// Tener en cuenta que a la hora de hacer los llamados callbacks, debemos tener que usar un parametro creado en la funcion y llamarla como una funcion recibiendo en este punto por el caso que nosotros queremos hacer muestre el resultado de la suma:
// Por ende es nombreImprimir(resultado);
// y el otro nombreResultadoPorDos(resultado); en el cual nosotros manipularemos de forma distinta el uso de de este al anterior ya que como el nombre indica debemos dar el resultado por 2
// en este punto simplemente usaremos la funcion anonima para multiplicador el valor que nos da
suma(5,5, function(valor){console.log(valor)},function(valor){console.log(`La suma por dos es: ${valor * 2}`)})
// Forma distinta y mas sencilla de escribir funciones anonimas con flechas
// nombreDato => nombreDato; (esto nos devolvera el valor es como return abreviado)
// (nombreDato) => nombreDato * 2; que igual que el anterior nos devolvera un valor
// Manera de objetos
// (nombreDato) => {nombreDato.propiedad}; igual que el anterior
// (nombreDato) => {nombreDato.propiedad < condicion}; (esta parte podemos indicarle una condicion si debe ser mayor,igual,menor y lo que se te ocurra en el caso que tu necesiten en concreto)
// ({nombrePropiedad}) => nombrePropiedad; y podemos aplicar todo lo anterior
// (nombreDato) => ({nombrePropiedad:valor,nombreDato.propiedad});
suma(5,5, valor => console.log(valor), (valor) => console.log(`La suma por dos es: ${valor * 2}`));
