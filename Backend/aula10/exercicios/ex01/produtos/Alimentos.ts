import { Produto } from "./Produto";

export class Alimentos implements Produto{
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

    calcularValorTotal(quantidade: number): number {
        this.peso = quantidade * 0.2;
        let valorTotal:number = this.peso * this.preco;
        return valorTotal;
    }

}