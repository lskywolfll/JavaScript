'use strict'

// Cuando usamos el this y este no esta haciendo referencia a quien pensamos por ende tenemos que cambiar el contexto para que realmetne sea al this que nos estamos refiriendo a este caso

const rene = {
    nombre: 'René',
    apellido: 'Sanchez'
}

const sasha = {
    nombre: 'Sacha',
    apellido: 'Lifszync'
}

function saludar(saludo = 'Hola'){
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

// bind nos sirve para indicar que quiero solamente hacer referencia a este objeto, osea en simples palabras: oye quiero hacer referencia solo en ese lugar los demas no me interesan que se vayan al carajo

// El parametro es el contexto y el bind no ejecuta la funcion simplemente nos retorna una nueva funcion con ese contexto cambiado(this)

// const saludarARene = saludar.bind(rene);
// const saludarASasha = saludar.bind(sasha);

// const personaSaludar = persona => {setTimeout(saludar.bind(persona), 1000)};
// setTimeout(saludar.bind(sasha),1000);
// setTimeout(saludar.bind(sasha,'contexto'),1000);

// Call and Apply en el momento ejecuta

// call llama al instante sin necesidad de hacer un setTimeout para ejecutarse por consola, ahora no ahorrariamos esa pequeña cosa
// los parametros se separan por , como siempre ha sido
// saludar.call(sasha, 'Hola che');

// Como el call el primer parametro siempre sera a quien queremos nosotros hacer referencia con el this y en apply nosotros como segundo parametro ingresamos en el arreglo(cajita) donde estaran todos los parametros que nosotros establescamos en la funcion
saludar.apply(sasha,['Hola che']);