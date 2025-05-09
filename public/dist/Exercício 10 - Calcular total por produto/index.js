"use strict";
// Exercício — Calcular total por produto
;
;
const productsData = [];
class Product {
    name;
    category;
    price;
    amount;
    constructor(product) {
        this.name = product.name;
        this.category = product.category;
        this.price = product.price;
        this.amount = product.amount;
    }
    ;
}
;
const products2 = [
    { name: "Café", category: "Bebida", price: 10, amount: 2 },
    { name: "Café", category: "Bebida", price: 10, amount: 1 },
    { name: "Leite", category: "Bebida", price: 5, amount: 3 }
];
function addProduct(name, category, price, amount) {
    const product = new Product({ name, category, price, amount });
    productsData.push(product);
}
addProduct("Café", "Bebida", 10, 2);
addProduct("Café", "Bebida", 10, 1);
addProduct("Leite", "Bebida", 5, 3);
addProduct("Leite", "Bebida", 3, 4);
function sumProducts(products) {
    let newProducts = {};
    products.forEach(product => {
        if (!newProducts[product.name]) {
            newProducts[product.name] = product.price * product.amount;
        }
        else {
            newProducts[product.name] += product.price * product.amount;
        }
    });
    return newProducts;
}
console.log(productsData);
console.log(sumProducts(productsData));
