'use strict'

// Transformacion de textos o cadenas de textos
var numero = 444;
var texto1 = 'Bienvenido al curso de Javascript de victor robles';
var texto2 = 'es muy buen curso';

var dato = numero.toString();
console.log(dato);

// Calcular la longitud del texto o cantidad de caracteres tiene, tambien puede contar cuantos valores tiene una cajita([]array o arreglo)
var nombre = "prueba";

console.log(nombre.length)

// Concatenar unir textos

// var textoTotal = texto1 + " " +texto2;
// Aqui utilizamos un metodo llamao concat, que sirve principalmente para unir textos de la misma forma que la anterior ^^ pero con mayor facilidad ademas con mas precicion si tenemos muchos textos entonces simplemente le añadimos otra parte para que de esta forma esten bien ordenados 
var textoTotal = texto1.concat(" " + texto2);

console.log(textoTotal);

// Metodos de busqueda en texto
// Aqui usamos la posicion exacta en donde se posicione el texto que indicamos por ej: el curso nos devolvera para este caso la posicion 14, ya que desde el siguiente en adelante se tiene el texto ingresado, en terminos simples es que nos devolvera la posicion antes que este el texto
var busqueda = texto1.indexOf('curso');
console.log(busqueda);

// Tambien existe el metodo search que es lo mismo que usar el indexOf y el metodo match pero en este nos devuelve una cajita con el valor que estamos encontrando, si se repite entonces este ultimo simplemente lo agregara de todas formas pero en una posicion distinta asi que no habria problema alguno con el
// Cabe destacar que tambien nos indica desde que posicion inicia el texto y de donde proviene el texto que estamos buscando con match
// Pero para que nos muestre los demas valores y no solo el primero entonces nosotros debemos usar expresiones regulares en el texto que nosotros queremos encontrar de esta forma:
// usamos las // para dar a lugar a una expresion en concreto a encontrar y al segundo /g, que usando g significa que queremos encontrar todos los valores que lo tengan y no solo uno
//                             var busqueda = texto1.match(/curso/g);

// Para nosotros obtener un texto usamos substr(indice,cantidadDeLetras);
// Metodo charAt(posicion) para sacar una letra en concreto
// Metodo texto1.startsWith("Letra con la cual inicia el texto que nosotros creemos") Devuelve verdadero o falso
// El otro es el endsWith("letra inicial");
// Metodo texto1.Includes("palabra") devuelve verdadero o falso si existe en este punto

// Reemplazo de una palabra
// texto1.replace("palabra","reemplazo");
// Separar un texto con slice, texto1.slice(posicion) si yo le indico la posicion 14 entonces lo unico que me devolvera es: curso de Javascript de victor robles
// Separar un texto pasandolos a una cajita con split, texto1.split("separador") dentro nosotros en el metodos tenemos que indicarle en base a que palabra u letra se empezara a separar para dejarlo en nuestra cajita separadamente
// Metodo trim para quitar los espacios desde el inicio y final,conservando solo el texto texto1.trim()

// Plantillas de texto
