"use strict";
// Exercício — Converter array de objetos em array de strings formatadas
;
const myProducts = [
    { name: "Café", price: 10, amount: 2 },
    { name: "Leite", price: 5, amount: 3 },
    { name: "Açúcar", price: 3, amount: 1 }
];
function transform(products) {
    const newList = products.map(product => {
        return `Produto: ${product.name}, Total: R$ ${product.price * product.amount}`;
    });
    return newList;
}
console.log(transform(myProducts));
