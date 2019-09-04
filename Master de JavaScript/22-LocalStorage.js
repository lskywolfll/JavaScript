'use strict'

// Almacenamiento desde el usuario para mantener informacion mientras este en la pagina

// Guardar datos

localStorage.setItem("Titulo","Curso de Symfony de victor Robles");

// Recuperar datos

console.log(localStorage.getItem("Titulo"));

// Guardar objetos/datos/variables

var usuario = {
    nombre: 'pepito',
    apellido: 'suarez',
    edad: 20,
    email: 'test@gmail.com'
};

localStorage.setItem('usuario',JSON.stringify(usuario));

// Recuperar objetos/variables/datos

var user = JSON.parse(localStorage.getItem("usuario"));

console.log(user);

document.querySelector('#datos').innerHTML = user.nombre + " " + user.apellido;

localStorage.clear();