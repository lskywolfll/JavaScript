// Objeto llamado rene(Recordar que al darle un valor dentro de {} se volvera un objeto) con las propiedades que nosotros queramos asignar
var rene = {
    nombre: 'René',
    apellido: 'Sanchez',
    edad: 20,
    peso: 65
}

console.log(`Al inicio del año ${rene.nombre} pesa ${rene.peso}kg`)
// Valores que siempre perduran,nunca cambiaran por que ese es el establecido y en algun momento en el cual se deba cambiar su valor, se podra cambiar directamente en nuestra variable contenedor por ende no debemos ir a todo el codigo a hacer los cambios
// Valor de incremento en cada paso
const INCREMENTO_PESO = 0.2;
// Cantidad de veces a iterar(repetir el codigo o cuantas veces se recorrera este ciclo en base a la condicion creada en el ciclo)
const DIAS_DEL_AÑO = 365;
// Crear arrow functions para simplificar el uso de funciones
const aumentoDePeso = (persona) => persona.peso += INCREMENTO_PESO;
const decrementoDePeso = (persona) => persona.peso -= INCREMENTO_PESO;
// Creamos un ciclo con un indice i = valorDeInicio; i condicion valorCondicional; i++(incremento en 1) o i--(decremente en 1)
// un cliclo donde se repetira cierta cantidad de veces en base a nuestra condicion y accion que se hara por ejemplo de estar incrementando en 1(valor + 1) su valor o decrementando su valor en 1(valor - 1)cada vez
// for (let i = 1; i <= DIAS_DEL_AÑO; i++) {
//     // Aqui usamos la libreria Math con la funcion random para que genere valores aleatorios a partir del 0.1 en adelante
//     let random = Math.random()
//     // 25% 
//     if(random < 0.25){
//         // Aumento de peso
//         aumentoDePeso(rene);
//     }
//     // 50%
//     else if(random < 0.50){
//         // Adelgazar
//         decrementoDePeso(rene);
//     }
// }
// console.log(`Al final del año ${rene.nombre} pesa ${rene.peso.toFixed(1)}kg`)

// Meta que queremos bajar de peso en este caso 3kg
const META = rene.peso - 3;
// Contador de los dias en los cuales nosotros iremos contando para ver cuanto nos demoramos en adelgazar
var cantidadDeDias = 0;
// Arrow function para ver si estamos comiendo mucho o simplemente comiendo en el cuales nosotros indicaremos un valor aleatorio con una condicion de probabilidad que en este caso por dar una idea fue el 30%, numeroAleatorio < 0.3(30%)
// Por lo general el Math.random() solo nos da valores aleatorios desde 0.00 en adelante por ende al querer solo el 30% del tiempo en el cual nosotros comemos, si es mas en tu caso simplemete le cambias por el que sea por ej: 50% = 0.5
const comeMucho = () => Math.random() < 0.3
// Hago 40% de ejercicios estadisticamente por mi, esto puede variar segun que tan precisos queremos ser
const realizaDeporte = () => Math.random() < 0.4
// Condicion que siempre se ejecutara lo de adentro, mientras(while) el peso que tengo no haya bajado los 3kg que indicamos como nuestra meta ira haciendo lo que establecimos dentro increible verdad :^)
while (rene.peso > META) {
    
    if(comeMucho()){
        aumentoDePeso(rene);
    }
    
    if(realizaDeporte()){
        decrementoDePeso(rene);
    }
    // aumenta en 1 la cantidad de dias en el cual nos esta tomando bajar los 3kg
    cantidadDeDias++;
}
// Aqui usamor la interpolacion de ES6, por el cual simplemente usando las `` nosotros podemos usar las ${variable} para no tener que concatenar(o unir) los valores que nosotros queramos imprimir en pantalla o en su defecto como ahora por consola
// A que es mejor que usar 'Pasaron' + cantidadDeDias + ' dias hasta que ' + 'rene.nombre' + ' adelgazo 3kg' aque si no lo nieges T_T
console.log(`Pasaron ${cantidadDeDias} dias hasta que ${rene.nombre} adelgazo 3kg`);