"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nome, peso) {
        this.nome = nome;
        this.peso = peso;
    }
    Animal.prototype.comer = function (quantidade) {
        console.log("o animal comeu ".concat(quantidade));
    };
    Animal.prototype.setNome = function (nome) {
        this.nome = nome;
        return this.nome;
    };
    Animal.prototype.getNome = function () {
        return this.nome;
    };
    Animal.prototype.setPeso = function (peso) {
        this.peso = peso;
        return this.peso;
    };
    Animal.prototype.getPeso = function () {
        return this.peso;
    };
    return Animal;
}());
exports.Animal = Animal;
