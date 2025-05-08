// Exercício — Agrupar produtos por categoria

// Crie uma função que receba um array de produtos (com nome e categoria) e retorne um
// objeto agrupando os nomes dos produtos por categoria.

interface Data { name: string, category: string }
interface Category { [key: string]: string[] }

const products: Data[] = [
    { name: "Café", category: "Bebida" },
    { name: "Leite", category: "Bebida" },
    { name: "Maçã", category: "Fruta" },
    { name: "Banana", category: "Fruta" },
    { name: "Bolo", category: "Doce" }
];

function groupCategories(products: Data[]) {
    let grouped: Category = {}

    products.forEach(product => {
        if (grouped[product.category]) {
            grouped[product.category].push(product.name)
        } else {
            grouped[product.category] = [product.name]
        }
    })

    return grouped
}

console.log(groupCategories(products));
