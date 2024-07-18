"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(sabor, tamanho, preco) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = preco;
    }
    Pizza.prototype.descricao = function () {
        return "pizza: ".concat(this.sabor, ", tamanho: ").concat(this.tamanho, ", preco: ").concat(this.preco);
    };
    return Pizza;
}());
exports.Pizza = Pizza;
