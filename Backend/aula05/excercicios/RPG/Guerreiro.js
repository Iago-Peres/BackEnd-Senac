"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
//2 classes, baseado em rpg, ambos podem atacar e sofrer dano
var readlineSync = require("readline-sync");
var Monstro_1 = require("./Monstro");
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
    Guerreiro.prototype.atacar = function () {
        //numero random: (max - min +1) +1
        this.acerto = Math.floor(Math.random() * ((20 - 1) + 1) + 1);
        console.clear();
        console.log("".concat(this.nome, " HP: (").concat(this.saudeAtual.valueOf(), "/").concat(this.saudeMax.valueOf(), ")"));
        console.log("".concat(monstro1.nome, " HP: (").concat(monstro1.saudeAtual.valueOf(), "/").concat(monstro1.saudeMax.valueOf(), ")\n"));
        console.log("".concat(this.nome, " ataca!\n"));
        monstro1.sofrerDano();
    };
    //causa dano base aleatorio dependendo de arma + força, caso atacar >= armadura
    Guerreiro.prototype.causarDano = function () {
        var baseatacar = Math.floor(Math.random() * ((8 - 1) + 1) + 1);
        var guerreiroatacar = baseatacar.valueOf() + this.forca.valueOf();
        return guerreiroatacar;
    };
    Guerreiro.prototype.sofrerDano = function () {
        if (monstro1.acerto.valueOf() >= this.armadura.valueOf() &&
            monstro1.acerto.valueOf() < 20) {
            //calcula saudeAtual de guerreiro1 - dano causado por monstro
            this.saudeAtual =
                this.saudeAtual.valueOf() - monstro1.causarDano().valueOf();
            //exibe dano sofrido por guerreiro1 causado por monstro1
            console.log("".concat(this.nome, " recebeu ").concat(monstro1
                .causarDano()
                .valueOf(), " pontos de dano!"));
            var pausa = readlineSync.question("");
            console.clear();
            exibirMenuDeAcoes();
            //exibindo hp/maxhp
            console.log("".concat(this.nome, " HP: (").concat(this.saudeAtual.valueOf(), "/").concat(this.saudeMax.valueOf(), ")"));
        }
        else if (monstro1.acerto.valueOf() == 20) {
            // igual ao primeiro if mas com valores de dano dobrados
            console.log("ataque critico!");
            this.saudeAtual = this.saudeAtual.valueOf() - monstro1.causarDano().valueOf() * 2;
            //exibe dano sofrido em dobro por guerreiro1 causado por monstro1
            console.log("".concat(this.nome, " recebeu ").concat(monstro1.causarDano().valueOf() * 2, " pontos de dano!"));
            console.log("".concat(this.nome, " HP: (").concat(this.saudeAtual.valueOf(), " / ").concat(this.saudeMax.valueOf(), ")"));
            var pausa = readlineSync.question("");
            console.clear();
            exibirMenuDeAcoes();
            //exibindo hp/maxhp
            console.log("".concat(this.nome, " HP: (").concat(this.saudeAtual.valueOf(), " / ").concat(this.saudeMax.valueOf(), ")"));
        }
        else if (monstro1.acerto.valueOf() < this.armadura.valueOf()) {
            //exibe se monstro1 errou o atacar
            console.log("".concat(monstro1.nome, " errou o ataque!"));
            var pausa = readlineSync.question("");
            console.clear();
            exibirMenuDeAcoes();
        }
        exibirMenuDeAcoes();
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
//guerreiro-------------------------------------------------------------------------------------
function exibirMenuDeAcoes() {
    console.log("".concat(this.nome, " HP: (").concat(this.saudeAtual.valueOf(), " / ").concat(this.saudeMax.valueOf(), ")"));
    console.log("".concat(monstro1.nome, " HP: (").concat(monstro1.saudeAtual.valueOf(), " / ").concat(monstro1.saudeMax.valueOf(), ")"));
    console.log("\n1- atacar: ");
    console.log("2- fugir: ");
    selecaoDeAcoes();
}
exibirMenuDeAcoes();
function selecaoDeAcoes() {
    if (this.saudeAtual.valueOf() <= 0) {
        console.log("".concat(this.nome, " morreu!"));
        throw new Error("fim");
    }
    else if (monstro1.saudeAtual.valueOf() <= 0) {
        console.log("".concat(monstro1.nome, " morreu!"));
        throw new Error("fim");
    }
    else {
        var acaoSelecionada = parseInt(readlineSync.question("o que fazer:"));
        switch (acaoSelecionada) {
            case 1:
                this.atacar();
            case 2:
                console.log("".concat(this.nome, " fugiu."));
                throw new Error("Fugiu");
            default:
                break;
        }
    }
}
var monstro1 = new Monstro_1.Monstro("monstro1", 10, 0, 30);
