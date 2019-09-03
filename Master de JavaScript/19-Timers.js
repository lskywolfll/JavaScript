'use strict'

// Tiempo
const TIME = () => 
{
    var tiempo = setInterval(() => {
        console.log('Se ha ejecutado');
    
        var encabezado = document.querySelector("h1");
        if (encabezado.style.fontSize == "50px") {
            encabezado.style.fontSize = "30px";
        } else {
            encabezado.style.fontSize = "50px";
        }
    
    }, 1000);

    return tiempo;
};

var tiempo = TIME();

var stop = document.querySelector('#stop');

stop.addEventListener('click', () => {
    alert('Se ha detenido satisfactoriamente el evento zoom!')
    console.log('Detenido el evento de zoom, de parte del usuario');
    clearInterval(tiempo);
});

var start = document.querySelector('#start');

start.addEventListener('click',() => 
{
    alert('Encendido!');
    console.log('Funciona');
    TIME();
});