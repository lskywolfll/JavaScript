
function diasEntreFechas(fecha1, fecha2){
    // abs nos da la funcion matematica del numero absoluto, no existiran numeros negativos

    // milisegunos
    const segundo = 1000;
    const minuto = 60;
    const hora = 60;
    const horaMaxima = 24;
    const dia = segundo * minuto * hora * horaMaxima;
    // nos dara la cantidad de milisegundos de diferencia entre una fecha y la otra 
    const diferencia = Math.abs(fecha1 - fecha2);

    // floor redondea
    return Math.floor(diferencia / dia);
}

// El metodo trunc de la libreria Math sirve para eliminar toda la parte decimal a partir de la coma (,)
const edad = (milisegundos) => Math.trunc(milisegundos / 365); 

// Date(año,mes,dia)
const hoy = new Date();
const nacimiento = new Date(1999,07,25);

var tiempo = diasEntreFechas(hoy,nacimiento);
console.log(edad(tiempo));