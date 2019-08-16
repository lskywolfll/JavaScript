'use strict'

// Parametros Rest y Spread
// Parametro rest ...nombre(todos los valores de los cuales no sabemos cuantos tendriamos) y los guardara en una cajita que contendra todos esos datos de los cuales no sabemos que son
function listadoFrutas(fruta1,fruta2, ...resto_de_frutas) {
    console.log(`Fruta 1: ${fruta1} y Fruta 2: ${fruta2} e el resto: ${resto_de_frutas}`);
}

listadoFrutas('Narajana','Manzana','Sandia','Pera','Melon','Coco');

var frutas = ['Naraja','Manzana','Sandia'];
// Spread es lo inverso del rest, nosotros le insertamos una serie de datos de nuestra cajita y los insertara por consiguiente en los parametros de la function e el rest que pusimos
// Asi que por definicion el spread es aquel donde nosotros insertamos parametros desde una caja de datos en el cual se insertaran ordenadamento desde la primera posicion de la cajita
listadoFrutas(...frutas,'Pera','Melon','Coco');