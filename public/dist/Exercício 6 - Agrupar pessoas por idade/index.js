"use strict";
// Exercício — Agrupar pessoas por idade
;
const people = [
    { name: "Ana", age: 30 },
    { name: "Lucas", age: 25 },
    { name: "Maria", age: 30 },
    { name: "João", age: 25 }
];
function filterAge(list) {
    let grouped = {};
    list.forEach(person => {
        if (grouped[person.age]) {
            grouped[person.age].push(person.name);
        }
        else {
            grouped[person.age] = [person.name];
        }
    });
    return grouped;
}
console.log(filterAge(people));
