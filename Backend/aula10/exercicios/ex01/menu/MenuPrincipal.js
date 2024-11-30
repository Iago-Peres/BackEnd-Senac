"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuPrincipal = void 0;
var readlineSync = require("readline-sync");
var Alimentos_1 = require("../produtos/Alimentos");
var Eletronicos_1 = require("../produtos/Eletronicos");
var Roupas_1 = require("../produtos/Roupas");
var MenuPrincipal = /** @class */ (function () {
    function MenuPrincipal() {
        this.carrinhoIndex = 0;
        this.carrinho = [];
        this.carrinhoPrecos = [];
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
        this.opcao = Number(readlineSync.question("escolha uma opcao:"));
        switch (this.opcao) {
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
                break;
        }
    };
    MenuPrincipal.prototype.comprar = function () {
        this.opcao;
        while (this.opcao != 4) {
            console.clear();
            console.log("1- ".concat(alimento1.nome, "| preco: ").concat(alimento1.calcularValorTotal().valueOf()));
            console.log("2- ".concat(eletronico1.nome, "| preco: ").concat(eletronico1.calcularValorTotal().valueOf()));
            console.log("3- ".concat(roupa1.nome, "| preco: ").concat(roupa1.calcularValorTotal().valueOf()));
            console.log("4- voltar.\n");
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
    };
    return MenuPrincipal;
}());
exports.MenuPrincipal = MenuPrincipal;
var alimento1 = new Alimentos_1.Alimentos("legume", "batata", 2);
var eletronico1 = new Eletronicos_1.Eletronicos("perifericos", 100, "teclado", 1);
var roupa1 = new Roupas_1.Roupas("roupaDeCima", 100, "camiseta", 1);
var chamaMenu = new MenuPrincipal();
chamaMenu.opcaoMenuPrincipal();
