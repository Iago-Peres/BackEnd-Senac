//fazer estas 3 classes interagirem

import { Carro } from "./Carro";
import { Moto } from "./Moto";

let carro1: Carro = new Carro(0, "corrida", 1000);
let carro2: Carro = new Carro(15, "passeio", 1500);

let moto1: Moto = new Moto(0, "offRoad", 500);

console.log(`carro1 ${carro1.getTipo()}, velocidade inicial: ${carro1.getVelocidade()}`);
carro1.setVelocidade(Math.floor(Math.random() * -50 - 1 + 1));
console.log(`carro1 ${carro1.getTipo()}, acelerou para: ${carro1.getVelocidade()}`);

console.log(`carro2 ${carro2.getTipo()}, velocidade: ${carro2.getVelocidade()}`);

console.log(`moto1 ${moto1.getTipo()}, velocidade atual : ${moto1.getVelocidade()}`);
moto1.setVelocidade(Math.floor(Math.random() * -50 - 1 + 1));
console.log(`moto1 ${moto1.getTipo()}, acelerou para : ${moto1.getVelocidade()}`);
