'use strict'

// Datos Externos que se piden mediante una api rest
// Fecth (ajax) y peticiones a servicios / apis rest

var usuarios = []

var ul_usuarios = document.querySelector('.usuarios');

fetch('https://reqres.in/api/users')
    // Convertimos los datos en un json, ya que es una promesa y el then nos indica que esperara el dato hasta ejecutarse y pasar al siguiente.
    .then(datos => datos.json())
    // Lista de usuarios que nos devuelve el json por la peticion que le hemos hecho
    .then(dato => {
        usuarios = dato.data;
        console.log(usuarios);

        usuarios.map( (user,i) => {
            let nombre = document.createElement('li').innerHTML = i + " " + user.first_name + " " + user.last_name;
            ul_usuarios.append(nombre);
            let salto = document.createElement('br');
            ul_usuarios.append(salto);
        });
        
    });