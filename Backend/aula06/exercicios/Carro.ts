export class Carro {
    private velocidade: number
    private peso: number
    private tipo: string

    constructor(velocidade: number, tipo: string, peso: number) {
        this.velocidade = velocidade;
        this.tipo = tipo;
    }
    getVelocidade(): number {
        return this.velocidade;
    }

    setVelocidade(novaVelocidade: number): number | void {
        if (this.velocidade >= 0) {
            return this.velocidade = novaVelocidade;
        } else {
            return console.log("velocidade não pode ser negativa")
        }
    }

    getTipo(): string {
        return this.tipo;
    }

    setTipo(tipo: string): string {
        return this.tipo = tipo;
    }

    getPeso(): number {
        return this.peso;
    }

    setPeso(peso: number): number {
        return this.peso = peso;
    }
}
