// 3.Calculadora Básica: Solicite ao usuário dois números e uma operação (por exemplo, +, -, *, /). Use if e else para executar a operação escolhida e exibir o resultado.
const readlineSync = require("readline-sync");
const n1 = readlineSync.questionInt("primeiro numero: ");
const operacao = readlineSync.question("operacao matematica (+,-,*,/): ");
const n2 = readlineSync.questionInt("segundo numero: ");
let result = 0;

if (operacao == "+") {
    result = n1 + n2;
} else if (operacao == "-") {
    result = n1 - n2;
} else if (operacao == "*") {
    result = n1 * n2;
} else if (operacao == "/") {
    result = n1 / n2;
} else {
    console.log("operacao invalida");
}
console.log(`\n ${n1} ${operacao} ${n2} = ${result}`);