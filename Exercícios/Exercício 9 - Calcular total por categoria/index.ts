// Exercício — Calcular total por categoria

// Você receberá um array de produtos, onde cada produto tem:
// * nome
// * categoria
// * preço
// * quantidade

// Crie uma função que retorne um objeto com o total de valor por categoria, considerando preço * quantidade.
interface Items {
    name: string
    category: string
    price: number
    amount: number
};

interface AddedItems {
    [key: string]: number
};

const items: Items[] = [
    { name: "Café", category: "Bebida", price: 10, amount: 2 },
    { name: "Leite", category: "Bebida", price: 5, amount: 3 },
    { name: "Maçã", category: "Fruta", price: 2, amount: 5 }
];

function sum(items: Items[]) {
    let addedItems: AddedItems = {};

    items.forEach(item => {
        if (addedItems[item.category]) {
            addedItems[item.category] += item.price * item.amount
        } else {
            addedItems[item.category] = item.price * item.amount
        }
    });

    return addedItems;

};

console.log(sum(items));
