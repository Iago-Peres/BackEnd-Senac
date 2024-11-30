//definir um enum chamado SaborPizza, 1 classe chamada Pizza que vai ter os parametros
//sabor, tamanho e preço, crie nesta classe um metodo chamado descrição que retorna uma string
//contendo a descrição da pizza no formato "Pizza [sabor], Tamanho[tamanho], Preço R$[preco]".
//criar 3 instancias de pizzas com diferentes sabores, tamanhos e preços e exiba no console
import { SaborPizza } from "./SaborPizza";

export class Pizza {
    private sabor: SaborPizza;
    private tamanho: string;
    private preco: number;

    constructor(sabor: SaborPizza, tamanho: string, preco: number) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = preco;
    }


    descricao(): string {
        return `pizza: ${this.sabor}, tamanho: ${this.tamanho}, preco: ${this.preco}`;
    }
}
