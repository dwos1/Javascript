const prompt = require("prompt-sync")();

let contador = 1;
let total = 0;

while (contador <= 5) {
    const nota = Number(prompt(`Digite a nota ${contador}: `));

    total = total + nota;
    contador = contador + 1;
}

const media = total / 5;

console.log("O total é:", total);
console.log("A média é:", media);

if (media >= 7) {
    console.log("O aluno passou.");
} else if (media >= 5) {
    console.log("O aluno ficou de recuperação.");
} else {
    console.log("O aluno reprovou.");
}