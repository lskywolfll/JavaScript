'use strict'

// Codigo helado
// Donde practicamente podemos cambiar algo que no debe poder cambiarse

const sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
};

// const birth = (persona) => persona.edad++;

const cumpleanosInmutable = persona => ({
    // Copiar todo el objeto persona ...objeto y con la , agregamos un dato nuevo pero este no cambiara el dato que copiamos del objeto
    
    // entonces tenemos un objeto completamente nuevo y sin afectar al objeto pero conteniendo todo los otros datos igualmente copiados e conlos cambios respectivos que hagamos como en este caso la edad
    ...persona,
    edad: persona.edad + 1
});