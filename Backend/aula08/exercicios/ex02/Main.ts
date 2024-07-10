import { Arvore } from "./Arvore";
import { Arbusto } from "./Arbusto";

const arvore1:Arvore = new Arvore(true, "coqueiro", "derde+marrom", "folhas-finas","cocos");
console.log(arvore1.derrubarCoco());

const arbusto1:Arbusto = new Arbusto(true, "groselhaDoMato","verde","folhasLargas","groselha");
arbusto1.gerarFrutos();