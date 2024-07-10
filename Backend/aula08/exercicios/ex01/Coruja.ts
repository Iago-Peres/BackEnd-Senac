import { Animal } from "../../exemplos/01/Animal";

export class Coruja extends Animal {

    constructor(nome: string, peso: number) {
        super(nome, peso);
    }

    voar(): void {
        console.log(`${this.getNome()} voou`);
    }
}