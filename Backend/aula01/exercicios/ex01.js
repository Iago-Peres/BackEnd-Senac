const readlineSync = require("readline-sync");

//variavel com o nome e idade e uma variavel que diga se é estudante ou não
let nome = "nome123";
let idade = 24;
let estudante = true;

/* console.log(`nome: ${nome}, idade: ${idade}, estudante: ${estudante}`);
console.log(typeof nome) */

//string para number
let string1 = "1";
let num1 = Number(string1);
console.log(num1);

//number para string
let numParaString = num1.toString();
console.log(numParaString);

let input = readlineSync.question("digitar:");
