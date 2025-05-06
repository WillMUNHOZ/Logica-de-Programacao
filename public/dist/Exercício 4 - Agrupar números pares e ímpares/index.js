"use strict";
// Agrupar números pares e ímpares
;
function evenOrOdd(array) {
    const evenOrOdd = {
        even: [],
        odd: []
    };
    array.forEach(n => {
        if (n % 2 === 0) {
            evenOrOdd.even.push(n);
        }
        else {
            evenOrOdd.odd.push(n);
        }
    });
    return evenOrOdd;
}
;
console.log(evenOrOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
