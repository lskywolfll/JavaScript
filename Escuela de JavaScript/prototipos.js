function heredaDe(prototipoHijo,prototipoPadre){
    var none = function(){};
    none.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new none;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

// Reto!!
// Agregar atributo altura al constructor que si es alto o no a si mide 1.8 metros
// Con esta funcion nosotros creamos una estructura similar a una clase en el cual nosotros indicamos que caracteristicas va a tener cada persona y que funciones puede hacer para despues hacer un objeto con ella
/**
 * Flujo del codigo va de arriba a abajo
 * Tenemos que tener en cuenta cuando creamos por ejemplo una funcion del prototypo y este la tenemos al final e nosotros la llamamos antes que el navegador carge esa parte de la funcion para que exista ej:
 * Rene.vivo()
 * Tener en mente que la funcion o la modificacion del prototypo esta despues de esta linea de codigo por ende no existe antes de esta y al querer llamar algo que no existe en el momento dado el programa colapsa provocando que no pueda seguir ejecutando todo lo demas que tengamos programado :(
 * Persona.prototype.vivo = () => console.log('Estoy vivo');
 */
function Persona(nombre,apellido,altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    this.mide = () => {
        if(this.verificarAltura()){
            console.log(`${this.nombre} Es Alto`)
        }else{
            console.log(`${this.nombre} Es Bajito`)
        }
    };
    this.verificarAltura = () => this.altura >= 1.80;
    this.saludar = () => console.log(`Hola me llamo ${this.nombre} ${this.apellido} `);
}

// Para agregar funciones dentro de nuestro prototypo en javascript entonces tenemos 2 vias una es hacerlo como se indico aqui o hacerlo de la forma que he hecho arribita con funciones anonimas dentro de la misma propiedad, ademas que es mas limpia y nos ahorramos mucha escritura de mas
Persona.prototype.saludarV2 = () => console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
// Problema con las arrow functions en los prototypos por que cuando nosotros queremos retornar un valor con ellas este cambia el this al this.window osea un this que esta afuera del objeto

// // Con la palabra reservada new nosotros estamos diciendo que estamos creando un objeto en base a Persona(funcion) sin usar el new estariamos usando la propia funcion pero no estariamos creando un objeto de por si
// var Rene = new Persona('René','Sanchez',1.75);
// var erika = new Persona('Erika','Luna',1.85);
// var arturo = new Persona('Arturo','Martinez',1.80);

// var personitas = [Rene,erika,arturo];
// for (const persona of personitas) {
//     console.log(persona.mide());
// }

// Copiar prototypo para hacer una herencia
function Desarrollador(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

heredaDe(Desarrollador,Persona);

Desarrollador.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}

