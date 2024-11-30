"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuPagamento = void 0;
var pix_1 = require("./pix");
var Dinheiro_1 = require("./Dinheiro");
var CartaoDeCredito_1 = require("./CartaoDeCredito");
var MenuPrincipal_1 = require("../menu/MenuPrincipal");
var readlineSync = require("readline-sync");
var MenuPagamento = /** @class */ (function () {
    function MenuPagamento(opcaoPagamento) {
        this.opcaoPagamento = opcaoPagamento;
    }
    MenuPagamento.prototype.pagar = function () {
        switch (this.opcaoPagamento) {
            case 1:
                dinheiro.pagar();
                this.pausa = readlineSync.question("");
                new MenuPrincipal_1.MenuPrincipal().opcaoMenuPrincipal();
                break;
            case 2:
                cartao.pagar();
                this.pausa = readlineSync.question("");
                new MenuPrincipal_1.MenuPrincipal().opcaoMenuPrincipal();
                break;
            case 3:
                pix.pagar();
                this.pausa = readlineSync.question("");
                new MenuPrincipal_1.MenuPrincipal().opcaoMenuPrincipal();
                break;
            case 4:
                new MenuPrincipal_1.MenuPrincipal().opcaoMenuPrincipal();
                break;
            default:
                console.log("opcao invalida");
                this.pagar();
                break;
        }
    };
    return MenuPagamento;
}());
exports.MenuPagamento = MenuPagamento;
var pix = new pix_1.Pix();
var cartao = new CartaoDeCredito_1.CartaoDeCredito();
var dinheiro = new Dinheiro_1.Dinheiro();
