//2 classes, baseado em rpg, ambos podem atacar e sofrer dano
import * as readlineSync from "readline-sync";

//guerreiro-------------------------------------------------------------------------------------
class Guerreiro {
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
  ataque(): void {
    //numero random: (max - min +1) +1
    this.acerto = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    monstro1.sofrerDano();
  }

  //causa dano base aleatorio dependendo de arma + força, caso ataque >= armadura
  causarDano(): Number {
    let baseAtaque: Number = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    let guerreiroAtaque: Number = baseAtaque.valueOf() + this.forca.valueOf();
    return guerreiroAtaque;
  }

  sofrerDano() {
    if (
      monstro1.acerto.valueOf() > guerreiro1.armadura.valueOf() &&
      monstro1.acerto.valueOf() < 20
    ) {
      //calcula saudeAtual de guerreiro1 - dano causado por monstro
      guerreiro1.saudeAtual =
        guerreiro1.saudeAtual.valueOf() - monstro1.causarDano().valueOf();

      //exibe dano sofrido por guerreiro1 causado por monstro1
      console.log(
        `${guerreiro1.nome} recebeu ${monstro1
          .causarDano()
          .valueOf()} pontos de dano!`
      );

      let pausa:String = readlineSync.question("");
      console.clear();
      exibirMenuDeAcoes();
      
      //exibindo hp/maxhp
      console.log(
        `${
          guerreiro1.nome
        } HP: (${guerreiro1.saudeAtual.valueOf()}/${guerreiro1.saudeMax.valueOf()})`
      );
    } else if (monstro1.acerto.valueOf() == 20) {
      // igual ao primeiro if mas com valores de dano dobrados
      console.log("ataque critico!");
      guerreiro1.saudeAtual =
        guerreiro1.saudeAtual.valueOf() - monstro1.causarDano().valueOf() * 2;

      //exibe dano sofrido em dobro por guerreiro1 causado por monstro1
      console.log(
        `${guerreiro1.nome} recebeu ${
          monstro1.causarDano().valueOf() * 2
        } pontos de dano!`
      );

      let pausa:String = readlineSync.question("");
      console.clear();
      exibirMenuDeAcoes();

      //exibindo hp/maxhp
      console.log(
        `${
          guerreiro1.nome
        } HP: (${guerreiro1.saudeAtual.valueOf()} / ${guerreiro1.saudeMax.valueOf()})`
      );
    } else if (monstro1.acerto.valueOf() < guerreiro1.armadura.valueOf()) {
      //exibe se monstro1 errou o ataque
      console.log(`${monstro1.nome} errou o ataque!`);
    }
    exibirMenuDeAcoes();
  }
}
let guerreiro1: Guerreiro = new Guerreiro("guerreiro1", "lanca", 8, 14, 25);
//guerreiro-------------------------------------------------------------------------------------

//monstro***************************************************************************************
class Monstro {
  nome: String;
  forca: Number;
  armadura: Number;
  saudeMax: Number;
  saudeAtual: Number;
  acerto: Number;

  constructor(nome: String, forca: Number, armadura: Number, saudeMax: Number) {
    this.nome = nome;
    this.forca = forca;
    this.armadura = armadura;
    this.saudeMax = saudeMax;
    this.saudeAtual = saudeMax;
  }
  //gera numero aleatorio entre uma determinada faixa: (max - min +1) +1
  ataque(): void {
    //numero random: (max - min +1) +1
    this.acerto = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    guerreiro1.sofrerDano();
  }

  causarDano() {
    let baseAtaque: Number = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    let monstroAtaque: Number = baseAtaque.valueOf() + this.forca.valueOf();
    return monstroAtaque;
  }

  sofrerDano() {
    if (
      guerreiro1.acerto.valueOf() >= monstro1.armadura.valueOf() &&
      guerreiro1.acerto.valueOf() < 20
    ) {
      //calcula saudeAtual de monstro1 - dano causado por guerreiro1
      monstro1.saudeAtual =
        monstro1.saudeAtual.valueOf() - guerreiro1.causarDano().valueOf();

      //exibe dano sofrido por monstro1 causado por guerreiro1
      console.log(
        `${monstro1.nome} recebeu ${guerreiro1
          .causarDano()
          .valueOf()} pontos de dano!`
      );

      let pausa:String = readlineSync.question("");
      console.clear();
      exibirMenuDeAcoes();
      //exibindo hp atual/hp total
      console.log(
        `${
          monstro1.nome
        } HP: (${monstro1.saudeAtual.valueOf()}/${monstro1.saudeMax.valueOf()})\n`
      );
    } else if (guerreiro1.acerto.valueOf() == 20) {
      // igual ao primeiro if mas com valores de dano dobrados
      console.log("ataque critico!");
      monstro1.saudeAtual =
        monstro1.saudeAtual.valueOf() - guerreiro1.causarDano().valueOf() * 2;

      //exibe dano sofrido em dobro por monstro1 causado por guerreiro1
      console.log(
        `${monstro1.nome} recebeu ${
          guerreiro1.causarDano().valueOf() * 2
        } pontos de dano!`
      );

      let pausa:String = readlineSync.question("");
      console.clear();
      exibirMenuDeAcoes();
      //exibindo hp atual/hp total
      console.log(
        `${
          monstro1.nome
        } HP: (${monstro1.saudeAtual.valueOf()} / ${monstro1.saudeMax.valueOf()})`
      );
    } else if (guerreiro1.acerto.valueOf() < monstro1.armadura.valueOf()) {
      //exibe se guerreiro1 errou o ataque
      console.log(`${guerreiro1.nome} errou o ataque!`);
      let pausa:String = readlineSync.question("");
      console.clear();
      exibirMenuDeAcoes();
    }
    monstro1.ataque();
  }
}
let monstro1: Monstro = new Monstro("monstro1", 10, 10, 30);
//monstro****************************************************************************************

function exibirMenuDeAcoes(): void {
  console.log("\n\n1- atacar: ");
  console.log("2- fugir: ");

  selecaoDeAcoes();
}

exibirMenuDeAcoes();

function selecaoDeAcoes(): void {
  let acaoSelecionada: Number = parseInt(readlineSync.question("o que fazer:"));
  switch (acaoSelecionada) {
    case 1:
      console.log(`\n${guerreiro1.nome} ataca!\n\n`);
      guerreiro1.ataque();
    case 2:
      console.log(`${guerreiro1.nome} fugiu.`);
      break;
    default:
      break;
  }
}

//zona de testes//////////////////////////

//zona de testes//////////////////////////
