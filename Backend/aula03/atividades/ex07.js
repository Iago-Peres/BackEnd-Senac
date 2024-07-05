//7.Crie um programa que gere a tabela de multiplicação de um número específico fornecido pelo usuário, indo de 1 a 10.
const readlineSync = require("readline-sync");
let numeroUsuario = readlineSync.questionInt("digite um numero: ");

for (let i = 1; i <= 10; i++) {
    let resultado = numeroUsuario * i;
    console.log(resultado);
    //console.log(numeroUsuario * i);
}