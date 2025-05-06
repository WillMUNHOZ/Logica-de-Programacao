// Exercício 2 — Contar vogais

// Crie uma função que receba uma string e conte quantas vogais (a, e, i, o, u) ela tem.

function count(word: string) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0

    const lyrics = word.toLowerCase().split("");

    lyrics.forEach(l => {
        if (vowels.includes(l)) {
            count++
        }
    })

    console.log(lyrics);
    return console.log(`Temos um total de ${count} vogais`);

}

count("William Munhoz");
