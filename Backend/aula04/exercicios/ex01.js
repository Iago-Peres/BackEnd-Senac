"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var readlineSync = require("readline-sync");
var nome = readlineSync.question("inserir nome: ");
var idade = readlineSync.questionInt("inserir idade: ");
var temCarteira = readlineSync.question("tem carteira (s/n): ");
function podeDirigir(myName, myIdade, myTemCarteira) {
    if (idade >= 18 && myTemCarteira == "s") {
        console.log("nome: ".concat(myName, " idade: ").concat(myIdade, ", pode dirigir: sim"));
    }
    else if (idade < 18 || myTemCarteira == "n") {
        console.log("nome: ".concat(myName, " idade: ").concat(myIdade, ", pode dirigir: nao"));
    }
    else {
        console.log("valor invalido para (temCarteira)");
    }
}
podeDirigir(nome, idade, temCarteira);
