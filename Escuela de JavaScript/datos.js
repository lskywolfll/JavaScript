var Sasha = {
	nombre: 'Sasha',
	apellido: '',
	edad: 28
}

var Dario = {
	nombre: 'Dario',
	apellido: '',
	edad: 30
}


function imprimirNombreEnMayusculas({ nombre }){
	console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(Sasha)
imprimirNombreEnMayusculas(Dario)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// Si no le damos nada como parametro nos dara un error function(), debe ser asi function(objeto) y en objeto deberia un nombre que sea un objeto con propiedades

// Tener ojo con los parametros usados en el objeto dado como parametro(Propiedad que queremos solamente para funcionar) ej: var nombre = {nombre:'Tu nombre'} esto tambien se puede ver asi {nombrePropiedad:valor} y mi funcion es function imprimirNombre({ nombre }) aqui le indico que como parametro quiero solamente la propiedad nombre del objeto imprimirNombre({nombre}){console.log(nombre.toUpperCase())}

// Parametros por valor o por referencia
function imprimirNombreYEdad({nombre},{edad}){
	//Reto => hola, me llamo Sacha y tengo 28 años por ejemplo
	console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
	// el uso de la comilla invertida ``,indica que estaremos usando ES6 de un estandar de javaScript nuevo y con esto nosotros podemos abreviar el uso de las variables e hacerlo mas legible de leer
	// Las ${variable} indica que queremos usar el valor de variable contenida para que se imprima por ejemplo en la consola
}

// En los objetos los parametros dados en la funcion, son por referencia a un objeto mismo y no por valor(no siendo un objeto)
function birthDay(persona){
	return{
		// Objeto nuevo,copiando todo lo que tenía el objeto anterior
        // creando un objeto nuevo con las características de un objeto creado anteriormente, por lo cual también podemos modificarlo agregando nuevas propiedades a nuestro objeto por ej: ahora a persona le quiero agregar si usa lentes o no, quedando de esta manera: ...persona,lentes:'si'
        // ...objeto(Copiaremos todo el objeto),propiedad:valor
        // También de esta manera no modificamos el dato del objeto ya pasado por referencia(persona) y obtenemos a la misma persona con el dato modificado que en este caso sería la edad.
		...persona,
		edad:persona.edad + 1
	}
	// persona.edad += 1;
}

// Igualdad
// x == y nos dara true(verdadero) son iguales pero si usamos === que es un metodo estricto de comparacion, nos dara false por no ser del mismo tipo de dato en estricto rigor, pero solo comparandolo con == nos dara verdadero por que son los mismo a pesar de ser con otro tipo de datos que en este caso es un texto
// == no importa que dato es pero que sean iguales los valores
// === importa el valor y tipo de dato sean iguales
var x = 4, y = '4'

// Las comparacion de objetos completo, jamas seran iguales por que sus variables son distintas a no ser que el otro objeto se le asigne el objeto a copiar ojo sin asignar nada osea ej: var persona = {nombre:'rene'} var ejemplo = persona; si los comparamos seran iguales(true o verdadero)
// Otro punto seria comparar una caracteristica con un valor dado con otro objeto con la misma propiedad pero con valor distinto ej: var persona = {nombre:'rene'} var otraPersona = {nombre:'rene'} (persona.nombre == otraPersona.nombre ) en cuyo caso nos dara true(verdadero)
// Esto depende si quieres ver el valor de una propiedad(caracteristica) de tu objeto o el objeto completo en si, radica en que especificamente quieres comparar en si
var sacha = {
	nombre: 'Sacha'
}

var otraPersona = {
	nombre: 'Sacha'
}

