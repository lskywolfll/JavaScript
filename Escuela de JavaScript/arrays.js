// Datos de personas que en este punto serian objetos con propiedades que deberia tener cada persona
var rene = {
    nombre: 'René',
    apellido: 'Sanchez',
    altura: 1.75
};

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
};

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
};

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
};

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
};

var dario = {
    nombre: 'Dario',
    apellido: 'Jaurez',
    altura: 1.71
};
// Creamos una cajita que contendra todas nuestras personas y las ordenara en base al orden en el cual guardamos los datos de las personas(objetos)
var personas = [rene,alan,martin,vicky,paula];
// Creamos un ciclo en el cual nosotros recorremos nuestra cajita en el cual siempre inicia en 0 por ej: tengo 5 datos verdad entonces si quiero ver todo lo que tiene paula deberia ser la posicion 5 no ?
// Pues no es asi como empieza en 0 la cajita entonces simplemente seria la cantidad total de personas - 1, para acceder al ultimo dato y 0 para el primer dato
// De tal forma simplemente ponemos la condicion que mientras i(valor inicial) sea menor a la cantiddad de datos de nuestra cajita
// Tener en mente que hay momento donde no sabes cuantos datos tenemos por que tiene demaciados seria una tortura ir contando de uno en uno por ende se creo la propiedad length(largo o cantidad de datos que contiene una cajita(array)) con el nosotros nos ahorramos ese tema y simplemente nos enfocamos en que queremos hacer en este caso
for (let i = 0; i < personas.length; i++) {
    const nombre = personas[i].nombre;
    const altura = personas[i].altura;
    console.log(`La altura de la persona ${nombre} es: ${altura}`);
}

// Filtrar elementos
const ALTURA_MAYOR = 1.8;
// Solo cuando tiene mas de un parametro se usan los parentecis en la funcion anonima u donde queremos solamente recibir una propiedad en concreto
const esAlta = persona => persona.altura > ALTURA_MAYOR;
// Version aun mas abreviada ya que solo nos importa en este "caso" la altura en si
const esMasAlta = ({altura}) => altura > ALTURA_MAYOR;
// Existe una propiedad para las cajitas que contienen personas(objetos)
// La cual es para filtrar en base a una funcion y el se encargara de hacer el ciclo y aumentos para filtrar a cada dato en base a una funcion que nosotros creemos
// no hay necesidad de usar los () para hacerla como funcion ya que es una constante siendo una funcion en si misma dentro
var personasAltas = personas.filter(esAlta);
// Version con funcion anonima y como se puede apreciar a veces esto provoca algo de complejidad al entender el sistema tanto nosotros u nuestro equipo que trabajara con nosotros
// La idea es hacer clara cada cosa que nosotros vamos desarrollando
// Recordar los principio solid, cada funcion tiene solo una responsabilidad por ende este tendria 2 responsaiblidades cuando debe tener solo una
var personasMasAltas = personas.filter((persona) => persona.altura > ALTURA_MAYOR)

// Reto!!!!!
// Crear un filtrado de los datos de nuestra cajita con las personas de mas baja altura y ahora con lo que hemos visto facilicimo  no ?
const esBaja = ({altura}) => altura < ALTURA_MAYOR;
var personasBajas = personas.filter(esBaja);

// Cuando creamos funciones anonimas tenemos que tener en cuenta 2 factores
// 1- Si simplemente necesitamos que nos retorna un resultado o objeto completos ej: persona => persona.altura *= 100 que nos devolvera el resultado en si no un objeto completo con la modificacion
// 2- si simplemente queremos tener mas de un resultado en este punto ej: quiero ahora multiplicar la altura de la persona y quiero que me devuelva una persona nueva, que en este punto se ha modificado a dicha persona
// En este punto vemos que nosotros encesitaremos usar las {} en este punto ya que necesitamos hacer 2 cosas para poder obtener lo que queriamos u creamos para tener un objeto nuevo con esto
const pasarAlturaACms = persona => {
    // Esto modificaba toda nuestra cajita sin nosotros querer que haga algo asi
    // persona.altura *= 100
    // return persona

    // Nuevo objeto copiando todas las caracteristicas de nuestras personitas
    // con esto logramos que no se modifique con la funcion map establecida para las cajitas(arrays o arreglos de datos o contenedor de datos, busca el tuyo ahora crea tu propio concepto pero del mismo camino que este es simplemente guardar datos)
    return {
        ...persona,
        altura: persona.altura * 100
    };
};
// Version mas sencilla en no tener que escribir todo lo anterior de alguna forma, ahora para que nosotros en funcion anonima devolvamos un objeto en una forma mas sencilla como cuando nos daba un valor es de esta forma:
// dato => ({}) se usan parentesis y dentro llaves para que de esta forma nos devuelva el objeto dentro que nosotros creemos o estructuremos
// dato => ({...objetoCopiar,propiedad: valor})
// tener en cuenta que cuando copiamos un objeto y ahora queremos agregarle un cambio usamos la , para añadirle o modificar ese dato que existe dentro del objeto dentro
// ej: casa => ({...casa,altura: casa.altura * 100})
const pasarAlturaACms2 = persona => ({
    ...persona,
    altura: persona.altura * 100
})

// Map nos devuelve una cajita nueva en este punto nosotros modificamos nuestra cajita, por ende no creamos otra caja nueva que contenga esos valores sino que cambio todo el sistema en si que teniamos
// Por ende nosotros ahora modificamos la funcion anonima del que pasa la altura a centimentros, creamos un nuevo objeto de cada uno de ellos para que de esta forma no afectemos al original con sus medidades 
var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms);