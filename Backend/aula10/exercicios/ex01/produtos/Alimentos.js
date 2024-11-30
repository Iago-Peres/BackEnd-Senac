"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimentos = void 0;
var Alimentos = /** @class */ (function () {
    function Alimentos(tipo, nome, peso) {
        this.tipo = tipo;
        this.nome = nome;
        this.peso = peso;
    }
    Alimentos.prototype.calcularValorTotal = function () {
        this.preco = this.peso;
        return this.preco;
    };
    return Alimentos;
}());
exports.Alimentos = Alimentos;
