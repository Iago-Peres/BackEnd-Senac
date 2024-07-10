import { Arvore } from "./Arvore";

export class Arbusto extends Arvore {

    constructor(
        viva: boolean,
        nome: string,
        cor: string,
        folhas: string,
        frutos: string,
    ) {
        super(viva, nome, cor, folhas,frutos);

    }

    gerarFrutos():void{
        console.log(`${this.getNome()} deu frutos`);
    }
}