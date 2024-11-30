import * as readlineSync from "readline-sync";
import { Alimentos } from "../produtos/Alimentos";
import { Eletronicos } from "../produtos/Eletronicos";
import { Roupas } from "../produtos/Roupas";
import { MenuPagamento } from "../metodoPagamentoMenu/MenuPagamento";

export class MenuPrincipal {
    carrinhoIndex: number = 0;
    carrinho: string[] = [];
    carrinhoPrecos: number[] = [];
    index: number = 0;

<<<<<<< HEAD
export class MenuPrincipal {
    carrinhoIndex: number = 0;
    carrinho: string[] = [];
    carrinhoPrecos: number[] = [];
    opcao: number;
    quantidadeItem1: number;
    quantidadeItem2: number;
    quantidadeItem3: number;


=======
>>>>>>> 1eda9a310bb37e9f9d64fecde8c040417e9caf27
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
<<<<<<< HEAD
        this.opcao = Number(readlineSync.question("escolha uma opcao:"));
        switch (this.opcao) {
=======
        let opcaoMenu: number = 0;
        opcaoMenu = Number(readlineSync.question("escolha uma opcao:"));
        switch (opcaoMenu) {
>>>>>>> 1eda9a310bb37e9f9d64fecde8c040417e9caf27
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
<<<<<<< HEAD
                break;
        }

    }

    comprar(): void {
        this.opcao;

        while (this.opcao != 4) {
            console.clear();
            console.log(`1- ${alimento1.nome}| preco: ${alimento1.calcularValorTotal().valueOf()}`);
            console.log(`2- ${eletronico1.nome}| preco: ${eletronico1.calcularValorTotal().valueOf()}`);
            console.log(`3- ${roupa1.nome}| preco: ${roupa1.calcularValorTotal().valueOf()}`);
            console.log("4- voltar.\n");

            this.opcao = Number(readlineSync.question("selecionar produto:"));

            switch (this.opcao) {
                case 1:
                    this.quantidadeItem1 = Number(readlineSync.question("quantos comprar:"));
                    for (let index: number = 0; index < this.quantidadeItem1; index++) {
                        this.carrinho[index] = alimento1.nome;
                        this.carrinhoPrecos[index] = alimento1.calcularValorTotal().valueOf();
                    }
                    console.log(`${this.quantidadeItem1} ${alimento1.nome} adicionado(s) ao carrinho.`);
                    let pausa = readlineSync.question("");
                    break;
                case 2:
                    this.quantidadeItem2 = Number(readlineSync.question("quantos comprar:"));
                    for (let index: number = 0; index < this.quantidadeItem2; index++) {
                        this.carrinho[index] = eletronico1.nome;
                        this.carrinhoPrecos[index] = eletronico1.calcularValorTotal().valueOf();
                    }
                    console.log(`${this.quantidadeItem2} ${eletronico1.nome} adicionado(s) ao carrinho.`);
                    pausa = readlineSync.question("");
                    break;
                case 3:
                    this.quantidadeItem3 = Number(readlineSync.question("quantos comprar:"));
                    for (let index: number = 0; index < this.quantidadeItem3; index++) {
                        this.carrinho[index] = roupa1.nome;
                        this.carrinhoPrecos[index] = roupa1.calcularValorTotal().valueOf();
                    }
                    console.log(`${this.quantidadeItem3} ${roupa1.nome} adicionado(s) ao carrinho.`);
                    pausa = readlineSync.question("");
                    break;
                case 4:
                    this.opcaoMenuPrincipal();
                    break;
                default:
                    console.log("opcao invalida!");
                    setTimeout(() => { }, 1500);
                    break;
            }
        }
    }

    verCarrinho(): void {
        console.clear();
        console.log("produto/preco");
        for (let index = 0; index < this.carrinho.length; index++) {
            if(this.carrinho.includes("batata")){
            console.log(`${this.carrinho[index]} x${this.quantidadeItem1}: ${alimento1.calcularValorTotal().valueOf() * this.quantidadeItem1}`);
            }
        }
        let pausa = readlineSync.question("");

    }

    pagar() {

=======
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
                    this.carrinho[this.index] = alimento1.nome;
                    this.carrinhoPrecos[this.index] = Number(alimento1.calcularValorTotal().valueOf());
                    this.index++
                    console.log(`${alimento1.nome} adicionado(a) ao carrinho.`);
                    let pausa = readlineSync.question("");
                    break;
                case 2:
                    this.carrinho[this.index] = eletronico1.nome;
                    this.carrinhoPrecos[this.index] = Number(eletronico1.calcularValorTotal().valueOf());
                    this.index++
                    console.log(`${eletronico1.nome} adicionado(a) ao carrinho.`);
                    pausa = readlineSync.question("");
                    break;
                case 3:
                    this.carrinho[this.index] = roupa1.nome;
                    this.carrinhoPrecos[this.index] = Number(roupa1.calcularValorTotal().valueOf());
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
            console.log(`${this.carrinho[i]}    | valor: ${this.carrinhoPrecos[i]}`)
        }
        let soma: number = 0;
        for (let i = 0; i < this.carrinhoPrecos.length; i++) {
            soma += this.carrinhoPrecos[i];
        }
        console.log(`\n valor total: ${soma}`)

        let pausa = readlineSync.question("digite enter para voltar:");
        this.opcaoMenuPrincipal();
    }

    pagar() {
        console.clear();
        let soma: number = 0;
        for (let i = 0; i < this.carrinhoPrecos.length; i++) {
            soma += this.carrinhoPrecos[i];
        }
        console.log(`valor total a pagar: ${soma}\n`)

        console.log("1- Dinheiro.");
        console.log("2- Cartao de Credito.");
        console.log("3- Pix.");
        console.log("4- Cancelar");

        new MenuPagamento(Number(readlineSync.question("\nselecionar opcao:"))).pagar();
>>>>>>> 1eda9a310bb37e9f9d64fecde8c040417e9caf27
    }

}
let alimento1: Alimentos = new Alimentos("legume", "batata", 2);
let eletronico1: Eletronicos = new Eletronicos("perifericos", 100, "teclado", 1);
let roupa1: Roupas = new Roupas("roupaDeCima", 100, "camiseta", 1);

<<<<<<< HEAD
let alimento1: Alimentos = new Alimentos("legume", "batata", 2);
let eletronico1: Eletronicos = new Eletronicos("perifericos", 100, "teclado", 1);
let roupa1: Roupas = new Roupas("roupaDeCima", 100, "camiseta", 1);

let chamaMenu: MenuPrincipal = new MenuPrincipal();

=======
let chamaMenu: MenuPrincipal = new MenuPrincipal();
>>>>>>> 1eda9a310bb37e9f9d64fecde8c040417e9caf27
chamaMenu.opcaoMenuPrincipal();