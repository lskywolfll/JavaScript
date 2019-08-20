'use strict'

// Arrays Multidimencionales => una cajita dentro de otra cajita

var categorias = ['Accion','Terror','Comedia'];
var peliculas = ['La verdad duele','La vida es bella','Gran torino'];

var cine = [categorias,peliculas];
// Queremos ahora mostrar por consola la categoria accion
// Entonces como en cine tenemos una cajita sobre otras cajitas entonces la primera posicion(ubicacion) 0 pertenece a la caja de categorias y la 1 corresponde a las peliculas
// pues vale entonces se haria de esta forma: 
// cine[cajita][posicion del elemento]
// en las cajitas tenemos columnas y filas
// Entonces yo tengo a mi cajita de cine con otras 2 cajitas: categorias y peliculas
// En la primera posicion yo indico que cajita vamos a usar entonces con el nosotros indicamos que categoria queremos saber lo que tiene, se puede ver de esta otra forma
// n columas n filas
// cine[columna][fila] => en este punto la columna es la ubicacion de las cajitas y la fila el elemento de dicha cajita en su posicion correspondiente de la cual nosotros queremos saber
// La otra forma es por n filas n columnas
// cine[fila][columna] => fila en este punto seria la ubicacion de la cajita y columna seria los elementos que contiene esa fila de nuestra caja
console.log(cine[0][1]);

// Añadir un elemento a una cajita
// cajita(array).push(elemento) => el elemento varia de lo que nosotros queramos agregar en nuestra cajita si queremos sea un texto usaremos las comillas "" o '' o ``, numero 1 2 3 4 5... y lo que senos ocurra agregar tener siempre en mente lo que nosotros queremos hacer en los casos a resolver u por diversion como siempre debe ser al desarrollar
peliculas.push('Batman');
console.log(peliculas);
// simplemente creamos el contenedor del elemento sea un texto vacio para usarlo en el ciclo
var elemento = '';

do {
    // Pedimos el nombre de la pelicula al usuario y le introducimos a la palabra para terminar de agregar peliculas
    elemento = prompt('Introduce tu pelicula:\nIntroduce FIN para no ingresar mas peliculas');
    peliculas.push(elemento);
} while (elemento != 'FIN');

// Elimina el ultimo elemento de nuestra cajita y si pusieramos muchos pop se borrarian la cantidad de invocaciones de pop, o usandose
peliculas.pop();

// Eliminar un elemento de nuestra cajita
// Obtenemos la ubicacion exacta de la pelicula a eliminar
var indice = peliculas.indexOf('Gran torino')
// si no existiera la pelicula el indice nos devolveria un -1
if(indice > -1){
    // posicion y cantidad de veces que quiero eliminar el dato
    // .splice(posicion,cantidad)
    peliculas.splice(indice,1)
}

// Convertir la cajita en un texto con los elementos separados por coma(,)
// Si usaramos peliculas.join() sin dejarla en una variable no pasaria nada no cambiaria nada de nuestra cajita ya que este metodo no cambia en si en ella sino que convierte simplemente en una parte a texto, no manipula a la cajita original por eso usamos una variable para contener el texto de este
var texto = peliculas.join();
console.log(texto);

// Al revez
// Convertir en una cajita con el split
var cadena = 'texto1,texto2,texto3';
// con el split nosotros indicamos que cree una cajita en base a la separacion que nosotros indiquemos en este caso usamos la coma(,) para crearlas por ende nos daria 3 elementos en la cajita
var cadena_cajita = cadena.split(",");

console.log(cadena_cajita);

// Ordenar la cajita en base a nuestra condicion
// Ordena al revez los elementos
console.log(peliculas.reverse());
// Ordenamiento por onde alfabetico hace el metodo sort
console.log(peliculas.sort());