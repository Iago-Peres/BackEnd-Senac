import { Planta } from "./Planta";

export class Arvore extends Planta {
    private frutos: string;
    private folhas: string;

    constructor(
        viva: boolean,
        nome: string,
        cor: string,
        folhas: string,
        frutos: string
    ) {
        super(viva, nome, cor);
        this.folhas = folhas;
        this.frutos = frutos;
    }

    derrubarCoco(){
        console.log(`${this.getNome()}: Bonk!`);
    }
}