// Agrupar números pares e ímpares

// Crie uma função que receba um array de números e retorne um objeto com dois arrays:
// Um com os números pares
// Outro com os números ímpares

interface EvenOrOdd {
    even: number[]
    odd: number[]
};

function evenOrOdd(array: number[]) {
    const evenOrOdd: EvenOrOdd = {
        even: [],
        odd: []
    };

    array.forEach(n => {
        if (n % 2 === 0) {
            evenOrOdd.even.push(n)
        } else {
            evenOrOdd.odd.push(n);
        }
    })

    return evenOrOdd;
};

console.log(evenOrOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
