"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planta = void 0;
var Planta = /** @class */ (function () {
    function Planta(viva, nome, cor) {
        this.viva = viva;
        this.nome = nome;
        this.cor = cor;
    }
    Planta.prototype.getNome = function () {
        return this.nome;
    };
    return Planta;
}());
exports.Planta = Planta;
