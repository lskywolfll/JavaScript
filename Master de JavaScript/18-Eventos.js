'use strict'

// Eventos

window.addEventListener('load',() => {
    // Ponemos todo nuestras funcionalidades que le fueramos a agregar, cuando este cargado el html,css completamente se podra tener acceso a nuestro desarrollo

    // Cuando nosotros queramos ingresar nuestro js en el apartado del escabezado(head) provoca que salgan errores por que en el js las propiedades que esta usando aun no estan creadas por estar en el encabezado en los metadatos que el usuario no ve, cuando queramos hacer algo de esta forma nosotros tendremos que usar el evento de carga.

    // De esa forma nosotros no tendremos los errores que salen por estar llamando o usando propiedades que aun no se han creado
});

var boton = document.querySelector('#boton');
// const COLOR_POR_DEFECTO = () => {boton.style.background = "#ccc"};
// const COLOR_NUEVO = (color) => {boton.style.background = color};

function cambiarColor() {

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    var fondo = boton.style.background;
    if (fondo == 'green' || fondo == null) {
        boton.style.background = "red";
    } else {
        boton.style.background = "green";
    }

}

// click al boton
boton.addEventListener('click',cambiarColor());
// Mouse over sobre el boton
boton.addEventListener('mouseover', () => boton.style.background = "#ccc");
// Mouse out fuera del boton
boton.addEventListener('mouseout', () => boton.style.background = "blue");

// Focus => este evento es aquel cuando nosotros nos adentramos dentro del area, por ejemplo esta un cuadradito para escribir texto entonces lo clickeo entonces estoy dentro de el
var nombre = document.querySelector('#campo_nombre');
nombre.addEventListener('focus',() => 
{
    console.log('Estas dentro del campo nombre')
});
// Blur => estamos fuera del area,todo evento que salga de alguna parte por ejemplo estoy escribiendo mi nombre y luego clickeo otra parte, en ese instante yo salgo lo que provoca el evento de blur
nombre.addEventListener('blur',() => 
{
    console.log('Estas fuera del campo del nombre')
});
// Keydown => cuando fue presionado un boton del teclado
nombre.addEventListener('keydown',(event) => 
{
    console.log('Pulsando la tecla',String.fromCharCode(event.keyCode));
});
// Keypress => cuando esta siendo presionado un boton de nuestro teclado
nombre.addEventListener('keypress',(event) => 
{
    console.log('Tecla presionada', String.fromCharCode(event.keyCode));
});
// Keyup => cuando dejamos de presionar una tecla de nuestro teclado
nombre.addEventListener('keyup',(event) => 
{
    console.log('Tecla soltada', String.fromCharCode(event.keyCode));
});
