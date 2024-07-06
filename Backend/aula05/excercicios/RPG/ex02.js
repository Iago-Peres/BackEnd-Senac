"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//2 classes, baseado em rpg, ambos podem atacar e sofrer dano
var readlineSync = require("readline-sync");
//guerreiro-------------------------------------------------------------------------------------
var Guerreiro = /** @class */ (function () {
    function Guerreiro(nome, arma, forca, armadura, saudeMax) {
        this.nome = nome;
        this.arma = arma;
        this.forca = forca;
        this.armadura = armadura;
        this.saudeMax = saudeMax;
        this.saudeAtual = saudeMax;
    }
    //gera numero aleatorio entre uma determinada faixa: (max - min +1) +1
    Guerreiro.prototype.ataque = function () {
        //numero random: (max - min +1) +1
        this.acerto = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        monstro1.sofrerDano();
    };
    //causa dano base aleatorio dependendo de arma + força, caso ataque >= armadura
    Guerreiro.prototype.causarDano = function () {
        var baseAtaque = Math.floor(Math.random() * (8 - 1 + 1) + 1);
        var guerreiroAtaque = baseAtaque.valueOf() + this.forca.valueOf();
        return guerreiroAtaque;
    };
    Guerreiro.prototype.sofrerDano = function () {
        if (monstro1.acerto.valueOf() > guerreiro1.armadura.valueOf() &&
            monstro1.acerto.valueOf() < 20) {
            //calcula saudeAtual de guerreiro1 - dano causado por monstro
            guerreiro1.saudeAtual =
                guerreiro1.saudeAtual.valueOf() - monstro1.causarDano().valueOf();
            //exibe dano sofrido por guerreiro1 causado por monstro1
            console.log("".concat(guerreiro1.nome, " recebeu ").concat(monstro1
                .causarDano()
                .valueOf(), " pontos de dano!"));
            var pausa = readlineSync.question("");
            console.clear();
            exibirMenuDeAcoes();
            //exibindo hp/maxhp
            console.log("".concat(guerreiro1.nome, " HP: (").concat(guerreiro1.saudeAtual.valueOf(), "/").concat(guerreiro1.saudeMax.valueOf(), ")"));
        }
        else if (monstro1.acerto.valueOf() == 20) {
            // igual ao primeiro if mas com valores de dano dobrados
            console.log("ataque critico!");
            guerreiro1.saudeAtual =
                guerreiro1.saudeAtual.valueOf() - monstro1.causarDano().valueOf() * 2;
            //exibe dano sofrido em dobro por guerreiro1 causado por monstro1
            console.log("".concat(guerreiro1.nome, " recebeu ").concat(monstro1.causarDano().valueOf() * 2, " pontos de dano!"));
            var pausa = readlineSync.question("");
            console.clear();
            exibirMenuDeAcoes();
            //exibindo hp/maxhp
            console.log("".concat(guerreiro1.nome, " HP: (").concat(guerreiro1.saudeAtual.valueOf(), " / ").concat(guerreiro1.saudeMax.valueOf(), ")"));
        }
        else if (monstro1.acerto.valueOf() < guerreiro1.armadura.valueOf()) {
            //exibe se monstro1 errou o ataque
            console.log("".concat(monstro1.nome, " errou o ataque!"));
        }
        exibirMenuDeAcoes();
    };
    return Guerreiro;
}());
var guerreiro1 = new Guerreiro("guerreiro1", "lanca", 8, 14, 25);
//guerreiro-------------------------------------------------------------------------------------
//monstro***************************************************************************************
var Monstro = /** @class */ (function () {
    function Monstro(nome, forca, armadura, saudeMax) {
        this.nome = nome;
        this.forca = forca;
        this.armadura = armadura;
        this.saudeMax = saudeMax;
        this.saudeAtual = saudeMax;
    }
    //gera numero aleatorio entre uma determinada faixa: (max - min +1) +1
    Monstro.prototype.ataque = function () {
        //numero random: (max - min +1) +1
        this.acerto = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        guerreiro1.sofrerDano();
    };
    Monstro.prototype.causarDano = function () {
        var baseAtaque = Math.floor(Math.random() * (8 - 1 + 1) + 1);
        var monstroAtaque = baseAtaque.valueOf() + this.forca.valueOf();
        return monstroAtaque;
    };
    Monstro.prototype.sofrerDano = function () {
        if (guerreiro1.acerto.valueOf() >= monstro1.armadura.valueOf() &&
            guerreiro1.acerto.valueOf() < 20) {
            //calcula saudeAtual de monstro1 - dano causado por guerreiro1
            monstro1.saudeAtual =
                monstro1.saudeAtual.valueOf() - guerreiro1.causarDano().valueOf();
            //exibe dano sofrido por monstro1 causado por guerreiro1
            console.log("".concat(monstro1.nome, " recebeu ").concat(guerreiro1
                .causarDano()
                .valueOf(), " pontos de dano!"));
            var pausa = readlineSync.question("");
            console.clear();
            exibirMenuDeAcoes();
            //exibindo hp atual/hp total
            console.log("".concat(monstro1.nome, " HP: (").concat(monstro1.saudeAtual.valueOf(), "/").concat(monstro1.saudeMax.valueOf(), ")\n"));
        }
        else if (guerreiro1.acerto.valueOf() == 20) {
            // igual ao primeiro if mas com valores de dano dobrados
            console.log("ataque critico!");
            monstro1.saudeAtual =
                monstro1.saudeAtual.valueOf() - guerreiro1.causarDano().valueOf() * 2;
            //exibe dano sofrido em dobro por monstro1 causado por guerreiro1
            console.log("".concat(monstro1.nome, " recebeu ").concat(guerreiro1.causarDano().valueOf() * 2, " pontos de dano!"));
            var pausa = readlineSync.question("");
            console.clear();
            exibirMenuDeAcoes();
            //exibindo hp atual/hp total
            console.log("".concat(monstro1.nome, " HP: (").concat(monstro1.saudeAtual.valueOf(), " / ").concat(monstro1.saudeMax.valueOf(), ")"));
        }
        else if (guerreiro1.acerto.valueOf() < monstro1.armadura.valueOf()) {
            //exibe se guerreiro1 errou o ataque
            console.log("".concat(guerreiro1.nome, " errou o ataque!"));
            var pausa = readlineSync.question("");
            console.clear();
            exibirMenuDeAcoes();
        }
        monstro1.ataque();
    };
    return Monstro;
}());
var monstro1 = new Monstro("monstro1", 10, 10, 30);
//monstro****************************************************************************************
function exibirMenuDeAcoes() {
    console.log("\n\n1- atacar: ");
    console.log("2- fugir: ");
    selecaoDeAcoes();
}
exibirMenuDeAcoes();
function selecaoDeAcoes() {
    var acaoSelecionada = parseInt(readlineSync.question("o que fazer:"));
    switch (acaoSelecionada) {
        case 1:
            console.log("\n".concat(guerreiro1.nome, " ataca!\n\n"));
            guerreiro1.ataque();
        case 2:
            console.log("".concat(guerreiro1.nome, " fugiu."));
            break;
        default:
            break;
    }
}
//zona de testes//////////////////////////
//zona de testes//////////////////////////
