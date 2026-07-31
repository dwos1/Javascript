const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite o número: "));

let contador = 0;
let resultado = 0;

while (contador < 10) {
    contador++;
    resultado = numero * contador;

    console.log(numero, "x", contador, "=", resultado);
}