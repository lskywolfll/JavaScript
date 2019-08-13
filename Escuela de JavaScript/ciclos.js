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

const META = rene.peso - 3;
var cantidadDeDias = 0;

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

while (rene.peso > META) {
    
    if(comeMucho()){
        aumentoDePeso(rene);
    }
    
    if(realizaDeporte()){
        decrementoDePeso(rene);
    }

    cantidadDeDias++;
}

console.log(`Pasaron ${cantidadDeDias} dias hasta que ${rene.nombre} adelgazo 3kg`);