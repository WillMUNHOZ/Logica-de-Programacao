// Exercício — Calcular total por produto

// Crie uma função que receba um array de objetos com name, category, price e amount,
// e retorne um objeto onde cada nome de produto seja uma chave, e o valor total
// (preço × quantidade) seja o valor.


interface Products {
    name: string
    category: string
    price: number
    amount: number
};

interface NewProducts { [key: string]: number };

const productsData: Products[] = [];

class Product {
    name: string;
    category: string;
    price: number;
    amount: number;

    constructor(product: Products) {
        this.name = product.name;
        this.category = product.category;
        this.price = product.price;
        this.amount = product.amount;
    };
};


const products2: Products[] = [
    { name: "Café", category: "Bebida", price: 10, amount: 2 },
    { name: "Café", category: "Bebida", price: 10, amount: 1 },
    { name: "Leite", category: "Bebida", price: 5, amount: 3 }
];

function addProduct(name: string, category: string, price: number, amount: number) {
    const product = new Product({ name, category, price, amount })
    productsData.push(new Product({ name, category, price, amount }));
}

addProduct("Café", "Bebida", 10, 2);
addProduct("Café", "Bebida", 10, 1);
addProduct("Leite", "Bebida", 5, 3);
addProduct("Leite", "Bebida", 3, 4);

function sumProducts(products: Products[]) {
    let newProducts: NewProducts = {};

    products.forEach(product => {
        if (!newProducts[product.name]) {
            newProducts[product.name] = product.price * product.amount;
        } else {
            newProducts[product.name] += product.price * product.amount;
        }
    })

    return newProducts;
}

console.log(productsData);

console.log(sumProducts(productsData));