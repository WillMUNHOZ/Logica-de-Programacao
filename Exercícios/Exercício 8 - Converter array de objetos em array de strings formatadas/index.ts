// Exercício — Converter array de objetos em array de strings formatadas

// Crie uma função que receba um array de objetos com nome, preço e quantidade,
// e retorne um array de strings com o seguinte formato:
// "Produto: [nome], Total: R$ [preço * quantidade]"

interface database {
    name: string
    price: number
    amount: number
};

const myProducts: database[] = [
    { name: "Café", price: 10, amount: 2 },
    { name: "Leite", price: 5, amount: 3 },
    { name: "Açúcar", price: 3, amount: 1 }
];

function transform(products: database[]) {
    const newList = products.map(product => {
        return `Produto: ${product.name}, Total: R$ ${product.price * product.amount}`
    });

    return newList;
}

console.log(transform(myProducts));