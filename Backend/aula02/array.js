const readlineSync = require("readline-sync");

let racas = ["bulldog","pastor-alemao","pincher","puddle"];

let i = Number(readlineSync.question("digite numero de 0 a 3: "));
console.log(racas[i]);
//console.log(racas[readlineSync.question("digite um numero de 0 a 3: ")]);