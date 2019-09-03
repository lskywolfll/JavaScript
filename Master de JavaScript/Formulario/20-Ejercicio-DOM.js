'use strict'

window.addEventListener('load',() => 
{
    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = "none";

    formulario.addEventListener('submit',() => 
    {
        console.log('Eventos submit capturado');

        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellidos').value;
        var edad = parseInt(document.querySelector('#edad').value);

        if(nombre.trim() == null || nombre.trim().length <= 0 || apellido.trim() == null || apellido.trim().length <= 0 || edad == null || isNaN(edad)){
            alert('Maldito ingresa tus datos');
            return false;
        }

        // if(nombre.trim() == null || nombre.trim().length <= 0){
        //     alert('El nombre no es valido');
        //     document.querySelector('#error_nombre').innerHTML = "El nombre no es valido";
        //     return false;
        // }else{
        //     document.querySelector('#error_nombre').style.display = "none";
        // }

        box_dashed.style.display = "block";

        var datos = [nombre,apellido,edad];
        var orden = ['Nombre: ','Apellido: ','Edad: ']
        var parrafo = document.createElement('p');

        for (const indice in datos) {
            if (datos.hasOwnProperty(indice)) {
                const element = datos[indice];
                parrafo.append(orden[indice] + element);
                parrafo.append(document.createElement('br'));
                // parrafo.append(" " + element + " ")
                // parrafo.append(element);
            }
        }

        box_dashed.append(parrafo);

        // var p_nombre = document.querySelector('#p_nombre span');
        // var p_apellido = document.querySelector('#p_apellido span');
        // var p_edad = document.querySelector('#p_edad span');

        // p_nombre.innerHTML = nombre;
        // p_apellido.innerHTML = apellido;
        // p_edad.innerHTML = edad;
    });

});