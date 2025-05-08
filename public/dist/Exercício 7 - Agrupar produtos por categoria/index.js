"use strict";
// Exercício — Agrupar produtos por categoria
const products = [
    { name: "Café", category: "Bebida" },
    { name: "Leite", category: "Bebida" },
    { name: "Maçã", category: "Fruta" },
    { name: "Banana", category: "Fruta" },
    { name: "Bolo", category: "Doce" }
];
function groupCategories(products) {
    let grouped = {};
    products.forEach(product => {
        if (grouped[product.category]) {
            grouped[product.category].push(product.name);
        }
        else {
            grouped[product.category] = [product.name];
        }
    });
    return grouped;
}
console.log(groupCategories(products));
