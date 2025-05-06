// Exercício 3 — Verificar número primo

// Crie uma função que receba um número e diga se ele é primo ou não.

function toCheck(number: number) {
    if (number <= 1) {
        return console.log("Numbers less than or equal to 1 are not prime!");

    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return console.log("Found a divisor, it is not prime!");
        }
    }

    return console.log("Did not find any divisor, the number is prime!");
}

toCheck(11);