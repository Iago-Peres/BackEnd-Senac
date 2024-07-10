import { Animal } from "./Animal";

export class Cachorro extends Animal {
    private raca: string;

    constructor(nome: string, peso: number, raca: string) {
        super(nome, peso);
        this.raca = raca;
    }

    latir(): void {
        console.log(`${this.getNome()} latiu`);
    }
}