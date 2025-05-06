// Exercício — Contar palavras repetidas

// Crie uma função que receba uma frase (string) e retorne um objeto com a contagem de cada palavra repetida,
// ignorando maiúsculas/minúsculas e pontuação.

const regex = /[.,!?;:]/g;


function wordCounter(phrase: string) {
    const countWords: { [word: string]: number } = {};

    const newPhrase = phrase.replace(regex, "").toLowerCase().split(" ");

    newPhrase.forEach(word => {
        if (countWords[word]) {
            countWords[word]++;
        } else {
            countWords[word] = 1
        }
    });

    return countWords;
}

console.log(wordCounter("Hoje é um bom dia. Hoje é um dia feliz!"));
