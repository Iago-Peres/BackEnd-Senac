"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dinheiro = void 0;
var MenuPrincipal_1 = require("../menu/MenuPrincipal");
var Dinheiro = /** @class */ (function () {
    function Dinheiro() {
    }
    Dinheiro.prototype.pagar = function () {
        console.log("as compras foram pagas em dinheiro");
        new MenuPrincipal_1.MenuPrincipal().carrinho = [];
        new MenuPrincipal_1.MenuPrincipal().carrinhoPrecos = [];
    };
    return Dinheiro;
}());
exports.Dinheiro = Dinheiro;
