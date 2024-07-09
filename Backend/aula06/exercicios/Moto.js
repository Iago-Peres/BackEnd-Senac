"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(velocidade, tipo, peso) {
        this.velocidade = velocidade;
        this.tipo = tipo;
    }
    Moto.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    Moto.prototype.setVelocidade = function (novaVelocidade) {
        if (this.velocidade >= 0) {
            return this.velocidade = novaVelocidade;
        }
        else {
            return console.log("velocidade não pode ser negativa");
        }
    };
    Moto.prototype.getTipo = function () {
        return this.tipo;
    };
    Moto.prototype.setTipo = function (tipo) {
        return this.tipo = tipo;
    };
    Moto.prototype.getPeso = function () {
        return this.peso;
    };
    Moto.prototype.setPeso = function (peso) {
        return this.peso = peso;
    };
    return Moto;
}());
exports.Moto = Moto;
