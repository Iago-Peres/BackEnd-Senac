"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = void 0;
var readlineSync = require("readline-sync");
var Guerreiro_1 = require("./Guerreiro");
var Monstro = /** @class */ (function () {
    function Monstro(nome, forca, armadura, saudeMax) {
        this.nome = nome;
        this.forca = forca;
        this.armadura = armadura;
        this.saudeMax = saudeMax;
        this.saudeAtual = saudeMax;
    }
    //gera numero aleatorio entre uma determinada faixa: (max - min +1) +1
    Monstro.prototype.atacar = function () {
        //numero random: (max - min +1) + 1
        this.acerto = Math.floor(Math.random() * ((20 - 1) + 1) + 1);
        var pausa = readlineSync.question("");
        ////console.clear();
        console.log("".concat(guerreiro1.nome, " HP: (").concat(guerreiro1.saudeAtual.valueOf(), "/").concat(guerreiro1.saudeMax.valueOf(), ")"));
        console.log("".concat(this.nome, " HP: (").concat(this.saudeAtual.valueOf(), "/").concat(this.saudeMax.valueOf(), ")\n"));
        console.log("".concat(this.nome, " ataca!\n"));
        guerreiro1.sofrerDano();
    };
    Monstro.prototype.causarDano = function () {
        var baseatacar = Math.floor(Math.random() * ((8 - 1) + 1) + 1);
        var monstroatacar = baseatacar.valueOf() + this.forca.valueOf();
        return monstroatacar;
    };
    Monstro.prototype.sofrerDano = function () {
        if (guerreiro1.acerto.valueOf() >= this.armadura.valueOf() &&
            guerreiro1.acerto.valueOf() < 20) {
            //calcula saudeAtual de monstro1 - dano causado por guerreiro1
            this.saudeAtual = this.saudeAtual.valueOf() - guerreiro1.causarDano().valueOf();
            //exibe dano sofrido por monstro1 causado por guerreiro1
            console.log("".concat(this.nome, " recebeu ").concat(guerreiro1.causarDano().valueOf(), " pontos de dano!"));
            var pausa = readlineSync.question("");
            console.clear();
            this.atacar();
            //exibindo hp atual/hp total
            /////console.log(`${monstro1.nome} HP: (${monstro1.saudeAtual.valueOf()}/${monstro1.saudeMax.valueOf()})\n`);
        }
        else if (guerreiro1.acerto.valueOf() == 20) {
            // igual ao primeiro if mas com valores de dano dobrados
            console.log("ataque critico!");
            this.saudeAtual = this.saudeAtual.valueOf() - guerreiro1.causarDano().valueOf() * 2;
            //exibe dano sofrido em dobro por monstro1 causado por guerreiro1
            console.log("".concat(this.nome, " recebeu ").concat(guerreiro1.causarDano().valueOf() * 2, " pontos de dano!"));
            console.log("".concat(this.nome, " HP: (").concat(this.saudeAtual.valueOf(), " / ").concat(this.saudeMax.valueOf(), ")"));
            this.atacar();
            var pausa = readlineSync.question("");
            console.clear();
            //exibindo hp atual/hp total
            console.log("".concat(this.nome, " HP: (").concat(this.saudeAtual.valueOf(), " / ").concat(this.saudeMax.valueOf(), ")"));
        }
        else if (guerreiro1.acerto.valueOf() < this.armadura.valueOf()) {
            //exibe se guerreiro1 errou o atacar
            console.log("".concat(guerreiro1.nome, " errou o ataque!"));
            this.atacar();
            var pausa = readlineSync.question("");
            console.clear();
        }
    };
    return Monstro;
}());
exports.Monstro = Monstro;
var guerreiro1 = new Guerreiro_1.Guerreiro("guerreiro1", "lanca", 8, 0, 25);
