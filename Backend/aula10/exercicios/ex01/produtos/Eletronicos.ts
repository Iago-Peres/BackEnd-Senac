import { Produto } from "./Produto";

export class Eletronicos implements Produto{
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
        let valorTotal:number = this.preco * quantidade;
        return valorTotal;
    }

}