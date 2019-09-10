'use strict'

function cantidadDePoderDividirse(dividendo, divisor){
    // 13 / 4
    // 13 = dividendo y 4 divisor ya que dividira el 13
    if(dividendo < divisor){
        return 0;
    }

    return 1 + cantidadDePoderDividirse(dividendo - divisor, divisor);
}

var primo = (dividendo,total) => dividendo === total;

var dividendo = parseInt(prompt('Tu primer numero ?',0));
var divisor = parseInt(prompt('Por cual numero lo quieres dividir ?',0));

const total = cantidadDePoderDividirse(dividendo,divisor);

alert(`La cantidad de veces de poder dividir: ${dividendo}/${divisor} es: ${total} pero es primo: ${primo(dividendo,total)}`);

// Factorial

function factorial(n){
    // crea un cache como objeto
    if(!this.cache){
        this.cache = {};
    }

    // Condicion cuando termina todo el proceso de calculo este tendar un valor y por ello este nos retornara 
    if(this.cache[n]){
        return this.cache[n];
    }

    if(n == 1){
        return 1;
    }
    // Se creara una cache(objeto) en el cual le añadiremos el valor respectivo pero en este caso en la primera iteracion no arrojaria nada por que el valor final aun no esta calculado.
    
    // Por ende se iterara cada vez la funcion y cuando porfin llege al final del valor este se retornara
    this.cache[n] = n * factorial(n - 1);
    debugger;
    // Este retorno del dato es para enviarla al objeto cache
    return this.cache[n];
}