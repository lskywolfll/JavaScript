'use strict'

var limite = 100;
// crear una cajita con un valor inicial, establecer una condicion, accion a hacer en caso la condicion no se cumpla o cumpla
// let inicio = 1; inicio <= limite; inicio++(++ incremento en uno,-- decremente en uno)
for (let i = 1; i <= limite; i++) 
{
    console.log(`Numero ${i}`);
}
// Año
var year = 2019;
// while(mientras) (condicion){lo que sea que queramos hacer cuando no se cumpla la condicion o se cumpla}
// Aqui como siempre radica en lo que nosotros queramos hacer pero tenemos diferencias en el cual un for es mas manipulable sus ciclos por que tenemos acceso a su valor inicial y su fin.
// For sirve cuando ya sabemos el fin que tendra pero no sirve mucho cuando no sabemos con exactitud cuantas veces debe iterar(correr el codigo una cantidad x veces)
// While sirve para cuando no sabemos con certeridad cuando va a finalizar por ende al usar este ciclo se debe usar simplemente cuando no sabemos con exactidud el tope para parar
// claro que tiene sus desventajas por que no es tan manipulable su iteracion cada vez y tenemos que hacer dentro del while todo el proceso que nosotros queramos hacer u repetir cada vez hasta cierto punto
// Que en este caso iria en la condicion que le hemos establecido,ya que obviamente tenemos que romperlo en un punto si sabemos almenos un dato que puede usarse para romperlo
// Ya que sino simplemente tendremos que establecer true(verdadero) para que de esta forma corra siempre y dentro poner un break; para que en algun momento en base a alguna condicion que le demos, pase a hacer lo siguiente fuera del ciclo o sea se rompe "literalmente"
while (year <= 2035) {
    console.log(`Año cambiante: ${year}`)
    // Con este incremento de uno en uno, nosotros rompimos el ciclo para que no sea infinito y se nos cuelge el browser(navegador)
    year++;
    if (year == 2025) {
        break;
    }
}

console.log(`Año final: ${year}`)

// Do-While
// Primero se ejecuta una accion que nosotros queramos y al finalizar se evalua la condicion en el while(condicion) que queramos hacer

var years = 20;
// do(Hacer)
do {
    alert('Solo cuando sea diferente a 20')
    years++;
} while (years > 25);