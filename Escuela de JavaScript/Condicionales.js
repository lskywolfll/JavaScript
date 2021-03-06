// Datos
var sacha = {
    nombre: 'Sacha',
    apellido : 'Lifszyc',
    edad: 28,
    ingeniero:true,
    cocinero:false,
    cantante:false,
    dj:false,
    guitarrista:false,
    drone:true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad:13
}

const MAYORIA_DE_EDAD = 18;

// Funcionalidades
function profesiones(persona){

    console.log(`${persona.nombre} es: `)
    // Experimento exitoso entre comillas
    // if(persona.ingeniero && persona.cocinero && persona.cantante && persona.dj && persona.guitarrista && persona.drone){
    //     console.log(`${persona.nombre} es: ${persona.ingeniero,",",persona.cocinero,",",persona.cantante,",",persona.dj,",",persona.guitarrista,",",persona.drone}`)
    // }

    // if(en español es SI, por ende si es verdadero se ejecutara lo siguiente) como podemos ver en este ejemplo, si(persona.ingeniero) (osea si es true y no false(falso)) se ejecutara el mensaje por consola
    if(persona.ingeniero){
        console.log("Ingeniero")
    }
    
    if(persona.cocinero){
        console.log("cocinero")
    }
    
    if(persona.cantante){
        console.log("cantante")
    }
    
    if(persona.dj){
        console.log('dj')
    }
    
    if(persona.guitarrista){
        console.log('guitarrista')
    }
    
    if(persona.drone){
        console.log('vuela drone')
    }

    // Manera facil y rapida para no usar tantos if
    console.log(`Tu nombre ${persona.nombre} y eres: `)
    // Aqui creamos una cajita con los valores que contiene nuestra persona al respecto a las 6 profesiones, que contendran si es o no ingeniero u otros y asi sucesivamente
    var profesion = [persona.ingeniero,persona.cocinero,persona.cantante,persona.dj,persona.guitarrista,persona.drone]
    // Mensajes que siempre y cuando sea verdadero se le enviara un mensaje, que en este caso lo contendra esta cajita llamada nombre que debe tener la misma cantidad de resultados que la profesion
    var nombre = ['ingeniero','cocinero','cantante','dj','guitarrista','vuela dron']
    // ciclo
    // declaramos un indice(index) = 0;(para que comienze desde la posicion inicial de la cajita) indice < profesion.length;(condicion que siempre y cuando el indice sea menor a la cantidad de cosas que tiene la cajita profesion) indice++(aqui al indice le indicamos que se incremente cada ves que sea menor a la condicion que le hemos indicado)
    for (let index = 0; index < profesion.length; index++) {
        // const element = array[index];
        // Condicion que siempre que sea verdadero la profesion se imprima en consola el valor correspondiente de nuestra cajita de nombre
        if(profesion[index]){
            console.log(nombre[index])
        }
    }

}

profesiones(sacha);

// Principios SOLID
// Cada funcion debe tener una unica responsabilidad en base a lo que queremos que haga
// Por ejemplo temos una funcion encargada de solamente imprimir si es mayor de edad o no y otra funcion que hace el trabajo de calcular si es mayor o menor
// En este punto delegamos el trabajo a esas funciones en concreto con una unica responsabilidad
// Ninguna funcion puede tener mas de 1 responsabilidad, no puede hacer todo el trabajo ya que solo le corresponde una sola cosa u accion 
function esMayorDeEdad(persona){
    // edad de la persona >= 18(Mayoria de edad)
    // Pero para hacerlo mas legible y escalable estas funciones debemos dejar accesible al cambio de una forma global, osea en vez de simplemente declarar un numero para ver si es mayor de edad o no
    // Nosotros usaremos una variable con un nombre descriptivo a lo que es el valor como tal que significado tiene
    // Recordar que como la mayoria de edad es ya algo establecido que no puede cambiarse, debe ser usado como una constante ya que no se puede modificar sino usarlo con el valor asignado nt:todas las constantes debe ser con mayusculas y cuando tienen mas de una palabra se separan por _
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona){
    // Sasha es mayor de edad o sacha es menor de edad
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

// Arrow functions
// Funciones anonimas sin necesidad de crearlas con la palabra function nombreDeTuFuncion, de esta forma nosotros podemos crear funciones sin necesidad de crearlas osea podemos hacer que hagan alguna cosa en un momento dato, de una forma mas sencilla y rapida por lo cual es mucho mas beneficioso usarla cuando no es tan complejo lo que queramos desarrollar
// Tambien podemos crear variables u constante que contenga la funcion anonima, de esta forma simplemente usariamos el nombre de la variable u constante + el parametro que le indiquemos en la funcion anonima que hayamos creado
// Como habiamos visto anteriormente podemos establecer que reciba un objeto completo a manipularlo de la forma que quermos, o tambien simplemente exigiendo una propiedad en concreto para hacer la funcionalidad que por lo cual podemos hacer mas facil el uso de la funcion y directo al dato que queramos recibir.
// Claro esta todo esto va radica sustancialmente en lo que queramos hacer que en un punto recibir algo completo como un objeto nos aporte mas que simplemente pidiendo una propiedad en concreto
const VERIFICAR_MAYORIA_DE_EDAD = ({edad}) =>{
    return edad >= MAYORIA_DE_EDAD;
}
// NT: Esto se puede simplicar aun mas pero esto tiene un costo que lo hace menos legible de leer y entender si no tenemos conocimiento, si nos olvidamos para que creamos alguna funcion hara que todo sea mas dificil pero si tienes curiosidad asi va:
// const VERIFICAR_MAYORIA_DE_EDAD = ({edad}) => edad >= MAYORIA_DE_EDAD


function permitirAcceso(persona) {
    if(!esMayorDeEdad(persona)){
        console.log('Acesso denegado');
    }else{
        console.log('Acceso Permitido');
    }
}

// Reto!!!!!!!
// Crear un arrow function de menor de edad

// Version simplicista e algo dificil de entender sin previo conocimiento
const ES_MENOR_DE_EDAD = ({edad}) => edad >= MAYORIA_DE_EDAD;
// Version happy todos podemos entender 
function esMenorDeEdad({edad}){
    // Version mas entendidble aun es usar como parametro persona y en return persona.edad >= MAYORIA_DE_EDAD, que en este caso usamos toda las propiedades del objeto sin usarlas por lo cual usamos mas recursos tener ojo en esto
    // Cabe destacar que en esta parte solo necesitabamos un dato del objeto de la persona siendo la edad, por lo cual es mas simple y directa buscar simplemente la propiedad respectiva para usarla solamente a ella
    return edad >= MAYORIA_DE_EDAD;
}