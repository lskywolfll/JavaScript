'use strict'

var formularioAdd = document.querySelector('#peliculass');

formularioAdd.addEventListener('submit',() => 
{
    var agregarPeli = document.querySelector('#addpelicula').value;

    if(agregarPeli.length >= 1){
        localStorage.setItem(agregarPeli,agregarPeli);
    }
});

var lista = document.querySelector('#list');

for (const indice in localStorage) {
    if (localStorage.hasOwnProperty(indice)) {
        const element = localStorage[indice];
        console.log(element);
        let li = document.createElement('li');
        li.append(element);
        lista.append(li);
    }
}

var formularioDelete = document.querySelector('#deleteMovie');

formularioDelete.addEventListener('submit',() => 
{
    var eliminar = document.querySelector('#deletemovie').value;

    if(eliminar.length >= 1){
        localStorage.removeItem(eliminar);
    }
});
