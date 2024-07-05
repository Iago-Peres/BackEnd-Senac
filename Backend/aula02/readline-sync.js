const readlineSync = require("readline-sync");

const num1 = Number(readlineSync.question("inserir valor 1: "));
const num2 = Number(readlineSync.question("inserir valor 2: "));

console.log(num1 + num2);