'use strict'

// Eventos

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