"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuPrincipal = void 0;
var readlineSync = require("readline-sync");
var Alimentos_1 = require("../produtos/Alimentos");
var Eletronicos_1 = require("../produtos/Eletronicos");
var Roupas_1 = require("../produtos/Roupas");
<<<<<<< HEAD
=======
var MenuPagamento_1 = require("../metodoPagamentoMenu/MenuPagamento");
>>>>>>> 1eda9a310bb37e9f9d64fecde8c040417e9caf27
var MenuPrincipal = /** @class */ (function () {
    function MenuPrincipal() {
        this.carrinhoIndex = 0;
        this.carrinho = [];
        this.carrinhoPrecos = [];
<<<<<<< HEAD
=======
        this.index = 0;
>>>>>>> 1eda9a310bb37e9f9d64fecde8c040417e9caf27
    }
    MenuPrincipal.prototype.mostrarMenuPrincipal = function () {
        console.log("1- comprar.");
        console.log("2- ver carrinho.");
        console.log("3- pagar.");
        console.log("4- sair.\n");
    };
    MenuPrincipal.prototype.opcaoMenuPrincipal = function () {
        console.clear();
        this.mostrarMenuPrincipal();
<<<<<<< HEAD
        this.opcao = Number(readlineSync.question("escolha uma opcao:"));
        switch (this.opcao) {
=======
        var opcaoMenu = 0;
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
=======
                this.opcaoMenuPrincipal();
>>>>>>> 1eda9a310bb37e9f9d64fecde8c040417e9caf27
                break;
        }
    };
    MenuPrincipal.prototype.comprar = function () {
<<<<<<< HEAD
        this.opcao;
        while (this.opcao != 4) {
=======
        var opcaoCompra = 0;
        while (opcaoCompra < 4) {
>>>>>>> 1eda9a310bb37e9f9d64fecde8c040417e9caf27
            console.clear();
            console.log("1- ".concat(alimento1.nome, "| preco: ").concat(alimento1.calcularValorTotal().valueOf()));
            console.log("2- ".concat(eletronico1.nome, "| preco: ").concat(eletronico1.calcularValorTotal().valueOf()));
            console.log("3- ".concat(roupa1.nome, "| preco: ").concat(roupa1.calcularValorTotal().valueOf()));
            console.log("4- voltar.\n");
<<<<<<< HEAD
            this.opcao = Number(readlineSync.question("selecionar produto:"));
            switch (this.opcao) {
                case 1:
                    this.quantidadeItem1 = Number(readlineSync.question("quantos comprar:"));
                    for (var index = 0; index < this.quantidadeItem1; index++) {
                        this.carrinho[index] = alimento1.nome;
                        this.carrinhoPrecos[index] = alimento1.calcularValorTotal().valueOf();
                    }
                    console.log("".concat(this.quantidadeItem1, " ").concat(alimento1.nome, " adicionado(s) ao carrinho."));
                    var pausa = readlineSync.question("");
                    break;
                case 2:
                    this.quantidadeItem2 = Number(readlineSync.question("quantos comprar:"));
                    for (var index = 0; index < this.quantidadeItem2; index++) {
                        this.carrinho[index] = eletronico1.nome;
                        this.carrinhoPrecos[index] = eletronico1.calcularValorTotal().valueOf();
                    }
                    console.log("".concat(this.quantidadeItem2, " ").concat(eletronico1.nome, " adicionado(s) ao carrinho."));
                    pausa = readlineSync.question("");
                    break;
                case 3:
                    this.quantidadeItem3 = Number(readlineSync.question("quantos comprar:"));
                    for (var index = 0; index < this.quantidadeItem3; index++) {
                        this.carrinho[index] = roupa1.nome;
                        this.carrinhoPrecos[index] = roupa1.calcularValorTotal().valueOf();
                    }
                    console.log("".concat(this.quantidadeItem3, " ").concat(roupa1.nome, " adicionado(s) ao carrinho."));
                    pausa = readlineSync.question("");
                    break;
                case 4:
                    this.opcaoMenuPrincipal();
                    break;
                default:
                    console.log("opcao invalida!");
                    setTimeout(function () { }, 1500);
                    break;
            }
        }
    };
    MenuPrincipal.prototype.verCarrinho = function () {
        console.clear();
        console.log("produto/preco");
        for (var index = 0; index < this.carrinho.length; index++) {
            console.log("".concat(this.carrinho[index], " x").concat(this.quantidadeItem1, ": ").concat(alimento1.calcularValorTotal().valueOf() * this.quantidadeItem1));
        }
        var pausa = readlineSync.question("");
    };
    MenuPrincipal.prototype.pagar = function () {
=======
            opcaoCompra = Number(readlineSync.question("selecionar produto:"));
            switch (opcaoCompra) {
                case 1:
                    this.carrinho[this.index] = alimento1.nome;
                    this.carrinhoPrecos[this.index] = Number(alimento1.calcularValorTotal().valueOf());
                    this.index++;
                    console.log("".concat(alimento1.nome, " adicionado(a) ao carrinho."));
                    var pausa = readlineSync.question("");
                    break;
                case 2:
                    this.carrinho[this.index] = eletronico1.nome;
                    this.carrinhoPrecos[this.index] = Number(eletronico1.calcularValorTotal().valueOf());
                    this.index++;
                    console.log("".concat(eletronico1.nome, " adicionado(a) ao carrinho."));
                    pausa = readlineSync.question("");
                    break;
                case 3:
                    this.carrinho[this.index] = roupa1.nome;
                    this.carrinhoPrecos[this.index] = Number(roupa1.calcularValorTotal().valueOf());
                    this.index++;
                    console.log("".concat(roupa1.nome, " adicionado(a) ao carrinho."));
                    pausa = readlineSync.question("");
                    break;
                case 4:
                    break;
                default:
                    break;
            }
        }
        this.opcaoMenuPrincipal();
    };
    MenuPrincipal.prototype.verCarrinho = function () {
        console.clear();
        console.log("CARRINHO:");
        for (var i = 0; i < this.carrinho.length; i++) {
            console.log("".concat(this.carrinho[i], "    | valor: ").concat(this.carrinhoPrecos[i]));
        }
        var soma = 0;
        for (var i = 0; i < this.carrinhoPrecos.length; i++) {
            soma += this.carrinhoPrecos[i];
        }
        console.log("\n valor total: ".concat(soma));
        var pausa = readlineSync.question("digite enter para voltar:");
        this.opcaoMenuPrincipal();
    };
    MenuPrincipal.prototype.pagar = function () {
        console.clear();
        var soma = 0;
        for (var i = 0; i < this.carrinhoPrecos.length; i++) {
            soma += this.carrinhoPrecos[i];
        }
        console.log("valor total a pagar: ".concat(soma, "\n"));
        console.log("1- Dinheiro.");
        console.log("2- Cartao de Credito.");
        console.log("3- Pix.");
        console.log("4- Cancelar");
        new MenuPagamento_1.MenuPagamento(Number(readlineSync.question("\nselecionar opcao:"))).pagar();
>>>>>>> 1eda9a310bb37e9f9d64fecde8c040417e9caf27
    };
    return MenuPrincipal;
}());
exports.MenuPrincipal = MenuPrincipal;
var alimento1 = new Alimentos_1.Alimentos("legume", "batata", 2);
var eletronico1 = new Eletronicos_1.Eletronicos("perifericos", 100, "teclado", 1);
var roupa1 = new Roupas_1.Roupas("roupaDeCima", 100, "camiseta", 1);
var chamaMenu = new MenuPrincipal();
chamaMenu.opcaoMenuPrincipal();
