"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pix = void 0;
var MenuPrincipal_1 = require("../menu/MenuPrincipal");
var Pix = /** @class */ (function () {
    function Pix() {
    }
    Pix.prototype.pagar = function () {
        console.log("as compras foram pagas com pix");
        new MenuPrincipal_1.MenuPrincipal().carrinho = [];
    };
    return Pix;
}());
exports.Pix = Pix;
