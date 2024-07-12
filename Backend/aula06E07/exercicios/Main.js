"use strict";
//fazer estas 3 classes interagirem
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var carro1 = new Carro_1.Carro(0, "corrida", 1000);
var carro2 = new Carro_1.Carro(15, "passeio", 1500);
var moto1 = new Moto_1.Moto(0, "offRoad", 500);
console.log("carro1 ".concat(carro1.getTipo(), ", velocidade inicial: ").concat(carro1.getVelocidade()));
carro1.setVelocidade(Math.floor(Math.random() * -50 - 1 + 1));
console.log("carro1 ".concat(carro1.getTipo(), ", acelerou para: ").concat(carro1.getVelocidade()));
console.log("carro2 ".concat(carro2.getTipo(), ", velocidade: ").concat(carro2.getVelocidade()));
console.log("moto1 ".concat(moto1.getTipo(), ", velocidade atual : ").concat(moto1.getVelocidade()));
moto1.setVelocidade(Math.floor(Math.random() * -50 - 1 + 1));
console.log("moto1 ".concat(moto1.getTipo(), ", acelerou para : ").concat(moto1.getVelocidade()));
