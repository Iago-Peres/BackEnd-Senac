const readlineSync = require("readline-sync");

const numero = readlineSync.questionInt("digite um numero: ");

if (numero > 0) {
  console.log(`o numero ${numero} e positivo`);
} else if (numero < 0) {
  console.log(`o numero ${numero} e negativo`);
} else if (numero == 0) {
  console.log(`${numero}`);
} else {
  console.log("nao e um numero");
}
