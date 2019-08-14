'use strict'

/*

// alerta que saldra en pantalla alert(lo que sea que quieras que se imprima)
alert('Esto es una alerta');

// Alertas de confirmacion en el cual nos devolvera internamente un boleano(true o false(verdadero o falso)) en cual nosotros manipularemos ese valor en el momento,para que haga alguna accion
confirm('Estas seguro de querer continuar ?');
// Podemos tambien usarlo en un if, recordar que al usarlo en if nos dice siempre verdadero osea se vaya a cumplir x cosa o me de algo que sea verdad yo le indicare que haga los siguiente
if(confirm('Estas seguro ?')){
    console.log("paso el tipo")
}

*/

// Ingreso de datos prompt()
// Por lo general el prompt guarda texto ya que fue creado para dar ese valor por defecto, por ende si queremos pasar algun valor que nosotros pidamos sea numero u otro tipo de dato
// En este caso yo queria un numero asi que use la funcion parseInt(pasar un dato a entero) al igual que tenemos enteros, podemos tener decimales y etc
var resultado = parseInt(prompt('¿Que edad tienes ?', 20));
console.log(resultado)