'use strict'

var contador = 0;
// Esto nos devuelve un verdad o falso si el numero aleatorio es menor al 25% es verdadero en caso contrario nos dara un falso
const llueve = () => Math.random() < 0.25;
// Ciclo que se ejecutara al menos una vez ya que primero se encarga de hacer lo que nosotros le indiquemos y luego validara con la condicion que le pongamos
do {
    contador++;
} while (!llueve());
// Reto!!
// Resolver el bug de si fue solamente 1 vez entonces deberia decir que fui solo una vez y no veces ya que este ultimo es en plural,osea consiste en que no me diga que fui varias veces si solamente fui una
if(contador == 1){
    console.log(`Fui a ver si llovia ${contador} vez`);
}else{
    console.log(`Fui a ver si llovia ${contador} veces`);
}