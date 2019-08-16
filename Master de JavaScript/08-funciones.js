'use strict'

// Funciones
// Las funciones son todas aquellas donde se exigen o no datos para poder hacer una funcion(accion) que tiene sus propias reglas que serian estos datos qeu se exigen en algunos casos o no
// Tienen la particularidad de poder reutilizarse siempre ose practicamente podemos usarla cuantas veces nosotros queramos por ende nosotros podemos hacer una funcion para sumar que solo con la regla en el cual yo le pido unos datos en si para poder funcionar de forma en el cual nosotros queramos
// Acciones ya estructuradas para hacerlas cada vez que nosotros invocamos u usamos nuestra funcion, puede verse de una forma de por ejemplo sumar en 1 un valor cada vez que llame a la funcion, la cual nunca cambiara cuando al llamemos a noser que nosotros queramos ahora cambiar sus reglas(exigimiento de datos por parametros osea en (datos,datos) que podemos perdir 1 o mas datos dependiendo de lo que queramos hacer y necesidad para funcionar lo que vayamos a crear) cambiando las acciones a hacer

// function nombre parametros(dato) o (dato,dato) ej: multiplicar un numero (numero,multiplicacion) numero * multiplicacion
function hola(){
    // Acciones que nosotros queremos que haga cada vez que se llame a la funcion
    let limite = 100;
    for(let i = 0;i < limite; i++){
        console.log("hola")
    }
    return 'Hola';
}

// Tambien podemos dejarla ya dentro de la misma funcion y con una cantidad de veces a ejecutarse
// console.log(hola(),hola(),hola())
// LLamada de la funcion sin parametro ya que no lo pide
hola();
//si fuera como el ejemplo anterior con base y exponente seria asi function multiplicacion(numero,multiplicador){return numero = numero * multiplicacion; o return numero *= multiplicacion} y cuando la llamemos nos exige 2 datos por ende seria asi elevado(2,4) Me devolvera = 8

// Hagamoslo como prueba:
function multiplicacion(numero,multiplicador){
    return numero *= multiplicador;
}
// Nos da 8
multiplicacion(2,4);

// Las funciones son instrucciones fijas function imprimirCalculadora(primerNumero,segundoNumero) pero tambien tenemos las funciones con parametros opcionales osea no debo o necesito darle en estricto rigor un valor al llamar la funcion ej:
// En este punto los llamados parametros opciones solamente son aquellos donde le damos un valor ya asignado en los propios parametros por ende no es necesario que no exiga 3 datos sino 2 los cuales no tienen valor y necesito esos valores para hacer calulos para nuestra calculadora
function imprimirCalculadora(primerNumero,segundoNumero, mostrar = false){
    // Acciones que siempre se ejecutaran al llamar a la funcion
    // console.log('Suma: ' + (primerNumero + segundoNumero));
    // console.log('Resta: ' + (primerNumero - segundoNumero));
    // console.log('Multiplicacion: ' + (primerNumero * segundoNumero));
    // console.log('Division: ' + (primerNumero / segundoNumero));
    // return 'Hola soy una calculadora portatil'
    if(mostrar){
        console.log('Estoy vivo tio!!!')
        porPantalla(primerNumero,segundoNumero);
    }else{
        console.log('Estoy muerto tio!! rip')
        porConsola(primerNumero,segundoNumero);
    }

    // Concatenar funciones para asi no tener que dejarle toda la responsabilidad a una funcion principios de SOLID
    // porConsola(primerNumero,segundoNumero);
    // porPantalla(primerNumero,segundoNumero);
}
// Creamos las funciones que solo tienen una unica responsabilidad de hacer
function porConsola(primerNumero,segundoNumero){
    console.log('Suma: ' + (primerNumero + segundoNumero));
    console.log('Resta: ' + (primerNumero - segundoNumero));
    console.log('Multiplicacion: ' + (primerNumero * segundoNumero));
    console.log('Division: ' + (primerNumero / segundoNumero));
}

function porPantalla(primerNumero,segundoNumero){
    document.write('<br>Suma: ' + (primerNumero + segundoNumero));
    document.write('<br>Resta: ' + (primerNumero - segundoNumero));
    document.write('<br>Multiplicacion: ' + (primerNumero * segundoNumero));
    document.write('<br>Division: ' + (primerNumero / segundoNumero));
}

// Esto nos ejecutara lo mismo 2 veces por ende tendriamos 10 resultados ejecutando lo mismo por llamar a al funcion 2 veces y tambien tienendo en cuenta los valores que le dejaremos dentro, por ello se veran los mismo valores establecidos dentro

// Ahora que hicimos una forma dinamica de hacer los resultado de tal forma que con los datos exigidos para funcionar, los parametros(datos) y de los cuales nosotros usando la , iremos agregando mas datos que necesitemos para hacer alguna funcionalidad que nosotros queramos crear
// luego de tener los datos que le exigimos entonces nos ponemos a usarlas para que haga lo que nosotros queremos hacer que en este punto es el de calculas la suma,resta,multiplicaion y division en base a los valores que le demos por parametro
//                 (primerNumero,segundoNumero)
// imprimirCalculadoras(valor,valor) y en estricto rigor yo necesito darle valores a sus parametros
imprimirCalculadora(5,5);
imprimirCalculadora(5,8, true);