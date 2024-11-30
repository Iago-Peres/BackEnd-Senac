"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuPrincipal = void 0;
var readlineSync = require("readline-sync");
var Alimentos_1 = require("../produtos/Alimentos");
var Eletronicos_1 = require("../produtos/Eletronicos");
var Roupas_1 = require("../produtos/Roupas");
var MenuPagamento_1 = require("../metodoPagamentoMenu/MenuPagamento");
var MenuPrincipal = /** @class */ (function () {
    function MenuPrincipal() {
        this.carrinhoIndex = 0;
        this.carrinho = [];
        this.carrinhoPrecos = [];
        this.index = 0;
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
        var opcaoMenu = 0;
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
    };
    MenuPrincipal.prototype.comprar = function () {
        var opcaoCompra = 0;
        while (opcaoCompra < 4) {
            console.clear();
            console.log("1- ".concat(alimento1.nome, "| preco: ").concat(alimento1.calcularValorTotal().valueOf()));
            console.log("2- ".concat(eletronico1.nome, "| preco: ").concat(eletronico1.calcularValorTotal().valueOf()));
            console.log("3- ".concat(roupa1.nome, "| preco: ").concat(roupa1.calcularValorTotal().valueOf()));
            console.log("4- voltar.\n");
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
    };
    return MenuPrincipal;
}());
exports.MenuPrincipal = MenuPrincipal;
var alimento1 = new Alimentos_1.Alimentos("legume", "batata", 2);
var eletronico1 = new Eletronicos_1.Eletronicos("perifericos", 100, "teclado", 1);
var roupa1 = new Roupas_1.Roupas("roupaDeCima", 100, "camiseta", 1);
var chamaMenu = new MenuPrincipal();
chamaMenu.opcaoMenuPrincipal();
