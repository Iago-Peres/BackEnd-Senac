//2 classes, baseado em rpg, ambos podem atacar e sofrer dano
import * as readlineSync from "readline-sync";
import { Monstro } from "./Monstro";

//guerreiro-------------------------------------------------------------------------------------
export class Guerreiro {
  nome: String;
  arma: String;
  forca: Number;
  armadura: Number;
  saudeMax: Number;
  saudeAtual: Number;
  acerto: Number;

  constructor(
    nome: String,
    arma: String,
    forca: Number,
    armadura: Number,
    saudeMax: Number
  ) {
    this.nome = nome;
    this.arma = arma;
    this.forca = forca;
    this.armadura = armadura;
    this.saudeMax = saudeMax;
    this.saudeAtual = saudeMax;
  }

  //gera numero aleatorio entre uma determinada faixa: (max - min +1) +1
  atacar(inimigo:Monstro): void {
    //numero random: (max - min +1) +1
    this.acerto = Math.floor(Math.random() * ((20 - 1) + 1) + 1);
    console.clear();
    console.log(`${this.nome} HP: (${this.saudeAtual.valueOf()}/${this.saudeMax.valueOf()})`);
    console.log(`${monstro1.nome} HP: (${monstro1.saudeAtual.valueOf()}/${monstro1.saudeMax.valueOf()})\n`);
    console.log(`${this.nome} ataca!\n`);
    monstro1.sofrerDano();
  }

  //causa dano base aleatorio dependendo de arma + força, caso atacar >= armadura
  causarDano(dano:Number): Number {
    let baseatacar: Number = Math.floor(Math.random() * ((8 - 1) + 1) + 1);
    let guerreiroatacar: Number = baseatacar.valueOf() + this.forca.valueOf();
    return guerreiroatacar;
  }

  sofrerDano() {
    if (
      monstro1.acerto.valueOf() >= this.armadura.valueOf() &&
      monstro1.acerto.valueOf() < 20
    ) {
      //calcula saudeAtual de guerreiro1 - dano causado por monstro
      this.saudeAtual =
      this.saudeAtual.valueOf() - monstro1.causarDano().valueOf();

      //exibe dano sofrido por guerreiro1 causado por monstro1
      console.log(
        `${this.nome} recebeu ${monstro1
          .causarDano()
          .valueOf()} pontos de dano!`
      );

      let pausa: String = readlineSync.question("");
      console.clear();
      exibirMenuDeAcoes();

      //exibindo hp/maxhp
      console.log(`${this.nome} HP: (${this.saudeAtual.valueOf()}/${this.saudeMax.valueOf()})`);
    } else if (monstro1.acerto.valueOf() == 20) {
      // igual ao primeiro if mas com valores de dano dobrados
      console.log("ataque critico!");
      this.saudeAtual = this.saudeAtual.valueOf() - monstro1.causarDano().valueOf() * 2;

      //exibe dano sofrido em dobro por guerreiro1 causado por monstro1
      console.log(`${this.nome} recebeu ${monstro1.causarDano().valueOf() * 2} pontos de dano!`);
      console.log(`${this.nome} HP: (${this.saudeAtual.valueOf()} / ${this.saudeMax.valueOf()})`);

      let pausa: String = readlineSync.question("");
      console.clear();
      exibirMenuDeAcoes();

      //exibindo hp/maxhp
      console.log(`${this.nome} HP: (${this.saudeAtual.valueOf()} / ${this.saudeMax.valueOf()})`);
    } else if (monstro1.acerto.valueOf() < this.armadura.valueOf()) {
      //exibe se monstro1 errou o atacar
      console.log(`${monstro1.nome} errou o ataque!`);

      let pausa: String = readlineSync.question("");
      console.clear();
      exibirMenuDeAcoes();
    }
    exibirMenuDeAcoes();
  }
}

//guerreiro-------------------------------------------------------------------------------------

function exibirMenuDeAcoes(): void {
  console.log(`${this.nome} HP: (${this.saudeAtual.valueOf()} / ${this.saudeMax.valueOf()})`);
  console.log(`${monstro1.nome} HP: (${monstro1.saudeAtual.valueOf()} / ${monstro1.saudeMax.valueOf()})`);

  console.log("\n1- atacar: ");
  console.log("2- fugir: ");

  selecaoDeAcoes();
}

exibirMenuDeAcoes();

function selecaoDeAcoes(): void {
  if (this.saudeAtual.valueOf() <= 0) {
    console.log(`${this.nome} morreu!`);
    throw new Error("fim");
  } else if (monstro1.saudeAtual.valueOf() <= 0) {
    console.log(`${monstro1.nome} morreu!`);
    throw new Error("fim");
  } else {
    let acaoSelecionada: Number = parseInt(
      readlineSync.question("o que fazer:")
    );
    switch (acaoSelecionada) {
      case 1:
        this.atacar();
      case 2:
        console.log(`${this.nome} fugiu.`);
        throw new Error("Fugiu");

      default:
        break;
    }
  }
}

let monstro1: Monstro = new Monstro("monstro1", 10, 0, 30);