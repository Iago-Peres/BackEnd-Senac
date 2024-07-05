//4.\Maior de Três Números: Peça ao usuário para inserir três números e use if e else para determinar qual é o maior dos três. Em seguida, exiba o número maior.
const readlineSync = require("readline-sync");

const n1 = readlineSync.questionInt("primeiro numero: ");
const n2 = readlineSync.questionInt("segundo numero: ");
const n3 = readlineSync.questionInt("terceiro numero: ");

if (n1 > n2 && n1 > n3) {
    console.log(`o maior é ${n1}`);
} else if (n2 > n1 && n2 > n3) {
    console.log(`o maior é ${n2}`);
} else if (n3 > n1 && n3 > n2) {
    console.log(`o maior é ${n3}`);
} else {
    console.log("valores iguais ou incorretos");
}