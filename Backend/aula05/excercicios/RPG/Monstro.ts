import * as readlineSync from "readline-sync";
import { Guerreiro } from "./Guerreiro";

export class Monstro {
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
    atacar(inimigo:Guerreiro): void {
        //numero random: (max - min +1) + 1
        this.acerto = Math.floor(Math.random() * ((20 - 1) + 1) + 1);

        let pausa: String = readlineSync.question("");

        ////console.clear();
        console.log(`${inimigo.nome} HP: (${inimigo.saudeAtual.valueOf()}/${inimigo.saudeMax.valueOf()})`);
        console.log(`${this.nome} HP: (${this.saudeAtual.valueOf()}/${this.saudeMax.valueOf()})\n`);
        console.log(`${this.nome} ataca!\n`);
        guerreiro1.sofrerDano();
    }

    causarDano() {
        let baseatacar: Number = Math.floor(Math.random() * ((8 - 1) + 1) + 1);
        let monstroatacar: Number = baseatacar.valueOf() + this.forca.valueOf();
        return monstroatacar;
    }

    sofrerDano(hit: Number, dano: Number) {
        if (
            hit.valueOf() >= this.armadura.valueOf() &&
            hit.valueOf() < 20
        ) {
            //calcula saudeAtual de monstro1 - dano causado por guerreiro1
            this.saudeAtual = this.saudeAtual.valueOf() - dano.valueOf();

            //exibe dano sofrido por monstro1 causado por guerreiro1
            console.log(`${this.nome} recebeu ${dano.valueOf()} pontos de dano!`);

            let pausa: String = readlineSync.question("");
            console.clear();

            this.atacar(guerreiro1);
            //exibindo hp atual/hp total
            /////console.log(`${monstro1.nome} HP: (${monstro1.saudeAtual.valueOf()}/${monstro1.saudeMax.valueOf()})\n`);
        } else if (guerreiro1.acerto.valueOf() == 20) {
            // igual ao primeiro if mas com valores de dano dobrados
            console.log("ataque critico!");
            this.saudeAtual = this.saudeAtual.valueOf() - guerreiro1.causarDano().valueOf() * 2;

            //exibe dano sofrido em dobro por monstro1 causado por guerreiro1
            console.log(`${this.nome} recebeu ${guerreiro1.causarDano().valueOf() * 2} pontos de dano!`);
            console.log(`${this.nome} HP: (${this.saudeAtual.valueOf()} / ${this.saudeMax.valueOf()})`);

            this.atacar(guerreiro1);

            let pausa: String = readlineSync.question("");
            console.clear();

            //exibindo hp atual/hp total
            console.log(`${this.nome} HP: (${this.saudeAtual.valueOf()} / ${this.saudeMax.valueOf()})`);
        } else if (guerreiro1.acerto.valueOf() < this.armadura.valueOf()) {
            //exibe se guerreiro1 errou o atacar
            console.log(`${guerreiro1.nome} errou o ataque!`);

            this.atacar(guerreiro1);

            let pausa: String = readlineSync.question("");
            console.clear();

        }
    }
}

let guerreiro1: Guerreiro = new Guerreiro("guerreiro1", "lanca", 8, 0, 25);
