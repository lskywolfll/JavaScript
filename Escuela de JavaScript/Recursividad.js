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
    if(!this.cache){
        this.cache = {};
    }

    if(this.cache[n]){
        return this.cache[n];
    }

    if(n == 1){
        return 1;
    }

    this.cache[n] = n * factorial(n - 1);
    debugger;
    return this.cache[n];
}