import { Produto } from "./Produto";

export class Roupas implements Produto {
    tipo: string;
    preco: number;
    nome: string;
    peso: number;

    constructor(tipo: string, preco: number, nome: string, peso: number){
        this.tipo = tipo;
        this.preco = preco;
        this.nome = nome;
        this.peso = peso;
    }

    calcularValorTotal(): number {
        let valorTotal: number = this.preco;
        return valorTotal;
    }

}