'use strict'

// Closures 
// es aquel que recuerda el estado de las cosas cuando fueron invocadas

function crearSaludo(finalDeFrase){
    return (nombre) => {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    };
}

const saludoArgentino = crearSaludo('che');
const saludoMexicano = crearSaludo('güey');
const saludoColombiano = crearSaludo('amigo');

saludoArgentino('René');
saludoMexicano('René');
saludoColombiano('René');