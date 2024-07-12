"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(velocidade, tipo, peso) {
        this.velocidade = velocidade;
        this.tipo = tipo;
    }
    Carro.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    Carro.prototype.setVelocidade = function (novaVelocidade) {
        if (this.velocidade >= 0) {
            return this.velocidade = novaVelocidade;
        }
        else {
            return console.log("velocidade não pode ser negativa");
        }
    };
    Carro.prototype.getTipo = function () {
        return this.tipo;
    };
    Carro.prototype.setTipo = function (tipo) {
        return this.tipo = tipo;
    };
    Carro.prototype.getPeso = function () {
        return this.peso;
    };
    Carro.prototype.setPeso = function (peso) {
        return this.peso = peso;
    };
    return Carro;
}());
exports.Carro = Carro;
