"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronicos = void 0;
var Eletronicos = /** @class */ (function () {
    function Eletronicos(tipo, preco, nome, peso) {
        this.tipo = tipo;
        this.preco = preco;
        this.nome = nome;
        this.peso = peso;
    }
    Eletronicos.prototype.calcularValorTotal = function () {
        var valorTotal = this.preco;
        return valorTotal;
    };
    return Eletronicos;
}());
exports.Eletronicos = Eletronicos;
