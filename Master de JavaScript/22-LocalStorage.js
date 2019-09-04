'use strict'

// Almacenamiento desde el usuario para mantener informacion mientras este en la pagina

// Guardar datos

localStorage.setItem("Titulo","Curso de Symfony de victor Robles");

// Recuperar datos

console.log(localStorage.getItem("Titulo"));

// Guardar objetos/datos/variables
// Objetos con sus propiedades respectivas
var usuario = {
    nombre: 'pepito',
    apellido: 'suarez',
    edad: 20,
    email: 'test@gmail.com'
};

// Usamos el objeto json con el metodo stringify para que este lo pase a valores validos para el backend o los que controlan mayormente todas las funcionalidades u la recoleccion de datos
// Los guarda en formato texto
localStorage.setItem('usuario',JSON.stringify(usuario));

// Recuperar objetos/variables/datos
// Parseamos el dato que se guardo en formato para backend(servicios) a valores reales, ej: si teniamos un dato guardado con numeros se parsea o cambia su valor a un numero. Recordar que los datos que se guardan se convierten a texto y usando este parseo de los datos es como hacer ingieneria inversa
var user = JSON.parse(localStorage.getItem("usuario"));

console.log(user);

document.querySelector('#datos').innerHTML = user.nombre + " " + user.apellido;
// Limpia todo los datos
localStorage.clear();