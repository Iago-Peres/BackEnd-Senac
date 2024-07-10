

export class Animal {
    private nome: string;
    private peso: number;

    constructor(nome: string, peso: number) {
        this.nome = nome;
        this.peso = peso;
    }

    comer(quantidade: number): void {
        console.log(`o animal comeu ${quantidade}`);
    }



    setNome(nome: string): string {
        this.nome = nome;
        return this.nome;
    }
    getNome(): string {
        return this.nome;
    }

    setPeso(peso: number): number {
        this.peso = peso;
        return this.peso;
    }
    getPeso(): number {
        return this.peso;
    }
}