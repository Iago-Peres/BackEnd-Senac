//3 perguntas pedindo 3 notas, calcular a média
const readlineSync = require("readline-sync");

const nota1 = Number(readlineSync.question("nota 1: "));
const nota2 = Number(readlineSync.question("nota 2: "));
const nota3 = Number(readlineSync.question("nota 3: "));

const media = (nota1 + nota2 + nota3) / 3;

console.log(`\nmedia: ${media}`);