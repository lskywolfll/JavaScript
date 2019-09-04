// Creamos una clase persona con las caracteristicas que nosotros identifiquemos que lo definen en estricto rigo a nuestro objeto, en este ejemplo a nuestra persona lo define un nombre,apellido y altura por ende va en el constructor(propiedad){this.propiedad = propiedad} ej: constructor(nombre){this.nombre = nombre(este nombres es aquel se le pasamos por el constructor)}
class Persona{
    constructor(nombre,apellido,altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    // Creamos funciones que lo tendra unicamente los objetos de Persona
    mide() {
        if(this.verificarAltura()){
            console.log(`${this.nombre} Es Alto`)
        }else{
            console.log(`${this.nombre} Es Bajito`)
        }
    };

    verificarAltura() {this.altura >= 1.80;}
    // fn => function
    saludar(fn) {
        if (fn) {
            fn(this.nombre,this.apellido);
        }else{
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        }
    }

}

// Creamos una clase que herede todo lo que posee el otro objeto que en este ejemplo nuestro desarrollador hereda todas las caracteristicas y funciones del objeto Persona
class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        // Como estamos heredando nosotros debemos tener las mismos parametro y darselos al metodo(funcion) super(caracteristicas del objeto del cual heredamos todo)
        super(nombre,apellido,altura);
    }
    // Sobrescribimos el metodo saludar de Persona en desarrollador para que el sean definiciones distintas por ser objetos distintos pero con heredacion de otro objeto, en este punto el saludo del desarrollador es distinto del saludo de la persona y este cambio no afecta al objeto del cual heredamos sino que solo el cambio permanece en el objeto Desarrollador en este ejemplo

    // fn = function
    saludar(fn){
        // Practicamente podemos usar lo mismo que en arrow functions(funciones flecha) para poder acceder a unas propiedades concreta que hayamos creado, en este punto nuestro objeto
        var { nombre,apellido } = this;

        if (fn) {
            fn(nombre,apellido,true);
        }else{
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        }
    }
}

// // Con la palabra reservada new nosotros estamos diciendo que estamos creando un objeto en base a Persona(funcion) sin usar el new estariamos usando la propia funcion pero no estariamos creando un objeto de por si
// var Rene = new Persona('René','Sanchez',1.75);
// var erika = new Persona('Erika','Luna',1.85);
// var arturo = new Persona('Arturo','Martinez',1.80);

// var personitas = [Rene,erika,arturo];
// for (const persona of personitas) {
//     console.log(persona.mide());
// }

function responderSaludo(nombre,apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`);
    if(esDev){
        console.log(`Ah mirá, no sabia que eras desarrollador/a`);
    }
}

var Rene = new Persona('René','Sanchez',1.75);
var erika = new Persona('Erika','Luna',1.85);
var arturo = new Desarrollador('Arturo','Martinez',1.80);

Rene.saludar(responderSaludo);
arturo.saludar(responderSaludo);