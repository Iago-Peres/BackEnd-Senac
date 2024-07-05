//criar uma funçao passar nome, idade, se tem carteira de motorista, usar readlineSync
import * as readlineSync from "readline-sync";

let nome: String = readlineSync.question("inserir nome: ");
let idade: number = readlineSync.questionInt("inserir idade: ");
let temCarteira: String = readlineSync.question("tem carteira (s/n): ");

function podeDirigir(myName: String, myIdade: Number, myTemCarteira: String): void {
    if (idade >= 18 && myTemCarteira == "s") {
        console.log(`nome: ${myName} idade: ${myIdade}, pode dirigir: sim`);
    } else if (idade < 18 || myTemCarteira == "n") {
        console.log(`nome: ${myName} idade: ${myIdade}, pode dirigir: nao`);
    } else { console.log("valor invalido para (temCarteira)") }
}
podeDirigir(nome, idade, temCarteira);