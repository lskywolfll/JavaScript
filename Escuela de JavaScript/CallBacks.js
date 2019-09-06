'use strict'

const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts = { crossDomain: true };

const obtenerPersonaje = (id, callback) => {
    let url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    
    // Peticion tipo get del protocolo http via Jquery
    $
    .get(url,opts, (persona) => console.log(`Hola yo soy, ${persona.name}`))
    .fail( () => 
        {
            console.log(`Ha ocurrido un error, no se pudo encontrar el id:${id}`)
        }
    );

    // Aqui ingresamos si contiene algo el callback, entonces queremos que se llame a esa funcion llamada que en este punto puede ser la misma funcion que estamos usando actualmente para obtener los personajes del star wars
    if(callback){
        callback();
    }
};

// Jquery
// $.get(`${lukeUrl}` , opts, (datos) => console.log(datos.name));

// Practicamente el tercer parametros de la funcion get de jquery, sea una funcion que haga alguna accion mediante un dato, cabe destacar que entonces recibira todos los datos que recibamos de la api.

// no es necesario pedir datos en concreto por que al pedirle a la API este nos devolvera un json, un objeto en simples palabras que contendra toda la informacion que nosotros hayamos pedido en ese caso. 
// $.get(`${lukeUrl}` , opts, onPeopleResponse);

// obtenerPersonaje(1, () => {obtenerPersonaje(2, () => {obtenerPersonaje(3)})});

// CallBacks Hell!!! on fire this code!!!
// vale vale simplemente es el infierno de los callbacks en el sentido que se ira desarrollando nuestro codigo de forma mas horizontal por cada uno de ellos

// La solucion esta bien, lo unico que puede ocurrir es que visualmente no se vea agradable a simple vista esta solucion que practicamente funciona
// obtenerPersonaje(1, function () {
//     obtenerPersonaje(2, function () {
//         obtenerPersonaje(3)
//     })
// });

// Promises
// Las promesas le ventaja que nos brinda un poco es que nos brinda por defecto 2 parametros los cuales contendran un donde se haya recibido correctamente los datos y la otra en al que nos avisa si no se pudo conseguir dichos datos, ademas que nos devuelve dichos datos.

// .then metododo then nos sirve para convertirlo en promesa y recibir el dato que se haya hecho correctamente
// .cath metodo cath que toma el error en caso haya ocurrido algo inesperado por si se desconecto de la red,internet,corte de luz del servidor y etc
// nombreFuncion(parametro).then(funcion anonima o funcion que se encarga de manipular el dato que nos retornara este metodo al igual que el cath).cath(funcion anonima o funcion propia que vaya a manipular el error de alguna forma)

const obtenerPersonajePromise = (id, callback) => {
    return new Promise( (resolve,reject) => 
        {
            const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

            $
            .get(url,opts, (data) => resolve(data))
            .fail( () => reject(id))
        }
    )
};

const nombrePersonaje = (personaje) => console.log(`El personaje es ${personaje.name}`);

const errorDeId = (id) => console.log(`Ha ocurrido un error al obtener el id ${id}`);

obtenerPersonajePromise(1).then(nombrePersonaje).catch(errorDeId);