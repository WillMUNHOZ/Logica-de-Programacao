"use strict";
// Exercício — Calcular total por categoria
;
;
const items = [
    { name: "Café", category: "Bebida", price: 10, amount: 2 },
    { name: "Leite", category: "Bebida", price: 5, amount: 3 },
    { name: "Maçã", category: "Fruta", price: 2, amount: 5 }
];
function sum(items) {
    let addedItems = {};
    items.forEach(item => {
        if (addedItems[item.category]) {
            addedItems[item.category] += item.price * item.amount;
        }
        else {
            addedItems[item.category] = item.price * item.amount;
        }
    });
    return addedItems;
}
;
console.log(sum(items));
