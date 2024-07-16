"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartaoDeCredito = void 0;
var MenuPrincipal_1 = require("../menu/MenuPrincipal");
var CartaoDeCredito = /** @class */ (function () {
    function CartaoDeCredito() {
    }
    CartaoDeCredito.prototype.pagar = function () {
        console.log("as compras foram pagas com cartao de credito");
        new MenuPrincipal_1.MenuPrincipal().carrinho = [];
    };
    return CartaoDeCredito;
}());
exports.CartaoDeCredito = CartaoDeCredito;
