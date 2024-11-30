"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roupas = void 0;
var Roupas = /** @class */ (function () {
    function Roupas(tipo, preco, nome, peso) {
        this.tipo = tipo;
        this.preco = preco;
        this.nome = nome;
        this.peso = peso;
    }
    Roupas.prototype.calcularValorTotal = function () {
        var valorTotal = this.preco;
        return valorTotal;
    };
    return Roupas;
}());
exports.Roupas = Roupas;
