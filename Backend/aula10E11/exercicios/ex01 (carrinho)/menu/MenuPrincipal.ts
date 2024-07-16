import * as readlineSync from "readline-sync";
import { Alimentos } from "../produtos/Alimentos";
import { Eletronicos } from "../produtos/Eletronicos";
import { Roupas } from "../produtos/Roupas";
import { MenuPagamento } from "../metodoPagamentoMenu/MenuPagamento";
import { Produto } from "../produtos/Produto";

export class MenuPrincipal {
    carrinho: Produto[] = [];
    valorTotal:number;
    index: number = 0;

    constructor() {
    }

    mostrarMenuPrincipal(): void {
        console.log("1- comprar.")
        console.log("2- ver carrinho.")
        console.log("3- pagar.")
        console.log("4- sair.\n")
    }

    opcaoMenuPrincipal(): void {
        console.clear();
        this.mostrarMenuPrincipal();
        let opcaoMenu: number = 0;
        opcaoMenu = Number(readlineSync.question("escolha uma opcao:"));
        switch (opcaoMenu) {
            case 1:
                this.comprar();
                break;
            case 2:
                this.verCarrinho();
                break;
            case 3:
                this.pagar();
                break;
            case 4:
                console.log("Saindo...");
                process.exit(0);
            default:
                this.opcaoMenuPrincipal();
                break;
        }
    }

    comprar(): void {
        let opcaoCompra: number = 0;
        while (opcaoCompra < 4) {
            console.clear();
            console.log(`1- ${alimento1.nome}| preco: ${alimento1.calcularValorTotal().valueOf()}`);
            console.log(`2- ${eletronico1.nome}| preco: ${eletronico1.calcularValorTotal().valueOf()}`);
            console.log(`3- ${roupa1.nome}| preco: ${roupa1.calcularValorTotal().valueOf()}`);
            console.log("4- voltar.\n");
            opcaoCompra = Number(readlineSync.question("selecionar produto:"));
            switch (opcaoCompra) {
                case 1:
                    this.carrinho[this.index] = alimento1;
                    this.index++
                    console.log(`${alimento1.nome} adicionado(a) ao carrinho.`);
                    let pausa = readlineSync.question("");
                    break;
                case 2:
                    this.carrinho[this.index] = eletronico1;
                    this.index++
                    console.log(`${eletronico1.nome} adicionado(a) ao carrinho.`);
                    pausa = readlineSync.question("");
                    break;
                case 3:
                    this.carrinho[this.index] = roupa1;
                    this.index++
                    console.log(`${roupa1.nome} adicionado(a) ao carrinho.`);
                    pausa = readlineSync.question("");
                    break;
                case 4:
                    break;
                default:
                    break;
            }
        }
        this.opcaoMenuPrincipal();
    }

    verCarrinho(): void {
        console.clear();
        console.log("CARRINHO:");
        for (let i = 0; i < this.carrinho.length; i++) {
            console.log(`${this.carrinho[i].nome}    | valor: ${this.carrinho[i].calcularValorTotal()}`)
        }
        for (let i = 0; i < this.carrinho.length; i++) {
            this.valorTotal += this.carrinho[i].calcularValorTotal();
        }
        console.log(`\n valor total: ${this.valorTotal}`)

        let pausa = readlineSync.question("digite enter para voltar:");
        this.opcaoMenuPrincipal();
    }

    pagar() {
        console.clear();
        console.log(`valor total a pagar: ${this.valorTotal}\n`)

        console.log("1- Dinheiro.");
        console.log("2- Cartao de Credito.");
        console.log("3- Pix.");
        console.log("4- Cancelar");

        new MenuPagamento(Number(readlineSync.question("\nselecionar opcao:"))).pagar();
    }

}
let alimento1: Alimentos = new Alimentos("legume", "batata", 2);
let eletronico1: Eletronicos = new Eletronicos("perifericos", 100, "teclado", 1);
let roupa1: Roupas = new Roupas("roupaDeCima", 100, "camiseta", 1);

let chamaMenu: MenuPrincipal = new MenuPrincipal();
chamaMenu.opcaoMenuPrincipal();