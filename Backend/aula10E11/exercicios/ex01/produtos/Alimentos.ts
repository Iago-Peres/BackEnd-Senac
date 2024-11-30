import { Produto } from "./Produto";

export class Alimentos implements Produto{
    tipo: string;
    preco: number;
    nome: string;
    peso: number;

    constructor(tipo: string, nome: string, peso: number){
        this.tipo = tipo;
        this.nome = nome;
        this.peso = peso;
    }

    calcularValorTotal(): number {
        this.preco = this.peso;
        return this.preco;
    }

}