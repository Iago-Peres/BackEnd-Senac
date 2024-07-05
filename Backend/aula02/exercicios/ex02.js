//digitar dois numeros e verificar se o primeiro é é maior, menor igual, etc ao segundo
const readlineSync = require("readline-sync");

const n1 = Number(readlineSync.question("primeiro numero: "));
const n2 = Number(readlineSync.question("segundo numero: "));

console.log(`${n1} > ${n2}? ${n1 > n2}`);
console.log(`${n1} < ${n2}? ${n1 < n2}`);
console.log(`${n1} === ${n2}? ${n1 === n2}`);
console.log(`${n1} !== ${n2}? ${n1 !== n2}`);
console.log(`${n1} >= ${n2} ${n1 >= n2}`);
console.log(`${n1} <= ${n2}? ${n1 <= n2}`);
