// Exercício — Agrupar pessoas por idade

// Crie uma função que receba um array de objetos com nome e idade,
// e retorne um objeto agrupando as pessoas por idade.

interface People { name: string, age: number };

const people: People[] = [
    { name: "Ana", age: 30 },
    { name: "Lucas", age: 25 },
    { name: "Maria", age: 30 },
    { name: "João", age: 25 }
]

function filterAge(list: People[]) {
    let grouped: { [key: number]: string[] } = {}

    list.forEach(person => {
        if (grouped[person.age]) {
            grouped[person.age].push(person.name)
        } else {
            grouped[person.age] = [person.name]
        }
    })

    return grouped
}

console.log(filterAge(people));

