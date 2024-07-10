"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Arvore_1 = require("./Arvore");
var Arbusto_1 = require("./Arbusto");
var arvore1 = new Arvore_1.Arvore(true, "coqueiro", "derde+marrom", "folhas-finas", "cocos");
console.log(arvore1.derrubarCoco());
var arbusto1 = new Arbusto_1.Arbusto(true, "groselhaDoMato", "verde", "folhasLargas", "groselha");
arbusto1.gerarFrutos();
