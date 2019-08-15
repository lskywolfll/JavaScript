'use strict'
//  Pedimos datos con la funcion prompt
// Este por lo general nos devuelve texto simplemente y tambien podemos darle valos por defecto(tener en cuenta que estaran como ya ingresado y el usuario puede dar ok e se envia lo que dejamos por defecto)
// Si quisieramos convertir a otro dato la respuesta de nuestro usuario debemos usar otra funcion antes de llamar al prompt, por ejemplo parseInt para pasar el valor a entero
var signo = prompt('¿Cual es tu signo ?');
// Switch (valor)
// condicion que nos provee de casos(valores) que tendria este valor en concreto que nosotros queramos manipular mas sencillo que el if, no en todos los casos son eficientes los if a veces es mejor switch o el if en algun punto
switch (signo) {
    // case valor: acciones que nosotros queremos que hagas y por ultimo break; para romper el switch
    case 'leo':
        console.log('Se un kaizeneka,se un ganador, Aya que voy!! añade vida a tus años, NetKaizen')
        break;
    case 'acuario':
        console.log('Se un kaizeneka,se un ganador, Aya que voy!! añade vida a tus años, NetKaizen')
        break;
    case 'piscis':
        console.log('Se un kaizeneka,se un ganador, Aya que voy!! añade vida a tus años, NetKaizen')
        break;
    case 'cancer':
        console.log('Se un kaizeneka,se un ganador, Aya que voy!! añade vida a tus años, NetKaizen')
        break;
    case 'tauro':
        console.log('Se un kaizeneka,se un ganador, Aya que voy!! añade vida a tus años, NetKaizen')
        break;
    // Podemos tener casos dentro de otro caso, osea como en este ejemplo esta el caso de un texto con tilde y otro que no, cualquiera de los dos que se cumpla podra ejecutar lo que nosotros hayamos dejado indicado dentro
    // case valor:
        // case valor:
            // Acciones
            // break;
    case 'geminis':
        case 'géminis':
        console.log('Se un kaizeneka,se un ganador, Aya que voy!! añade vida a tus años, NetKaizen')
        break;
    // Default nos sirve para cuando no ocurre ningun caso de los anteriores entonces me ejecutar lo que yo indique o no indique nada y simplemente rompa el switch
    default:
        console.log('No es un signo zodiacal valido')
        break;
}