"use strict";
// Exercício 1 - Múltiplo de 3 e 5
// Crie uma função que receba um número e retorne:
// "Múltiplo de 3" se for múltiplo de 3,
// "Múltiplo de 5" se for múltiplo de 5,
// "Múltiplo de 3 e 5" se for múltiplo de ambos,
// ou "Não é múltiplo" se não for de nenhum.
function compare(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return console.log("This number is multiple of 3 and 5");
    }
    else if (number % 3 === 0) {
        return console.log("This number is multiple of 3");
    }
    else if (number % 5 === 0) {
        return console.log("This number is multiple of 5");
    }
    else {
        return console.log("This number is not a multiple of 3 or 5");
    }
}
;
compare(55);
