export interface Produto{
    tipo:string;
    preco:number;
    nome:string;
    peso:number;

    calcularValorTotal(quantidade:number):number;
}