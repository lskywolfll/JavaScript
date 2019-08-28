'use strict'

// Document Object Model
function cambiaColorDeFondo(elemento,color){
    elemento.style.background = color;
}

// Conseguir un elemento en base al id 

var caja = document.getElementById('micaja');
var caja2 = document.querySelector("#micaja");
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

// var color = prompt('Introduce tu color de fondo para el recuadro');
// if(confirm('Quieres cambiar el color ?')){
//     cambiaColorDeFondo(caja2,color);
//     alert('Color Cambiado!!!!')
// }

// console.log(caja);

// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

for (const valor in todosLosDivs) {
    if (todosLosDivs.hasOwnProperty(valor)) {
        const element = todosLosDivs[valor];
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector('#miseccion').appendChild(parrafo);
    }
}
document.querySelector('#miseccion').appendChild(document.createElement('hr'));
// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');

for (const posicion in divsRojos) {
    if (divsRojos.hasOwnProperty(posicion)) {
        const element = divsRojos[posicion];
        element.style.background = "blue";
    }
}

console.log(divsRojos);