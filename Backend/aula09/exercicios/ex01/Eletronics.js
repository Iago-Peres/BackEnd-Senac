"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronics = void 0;
var Eletronics = /** @class */ (function () {
    function Eletronics(type, price, name, wheight) {
        this.type = type;
        this.price = price;
        this.name = name;
        this.wheight = wheight;
    }
    Eletronics.prototype.buy = function (quantity) {
        console.log("total buy price: ".concat(quantity * this.price));
    };
    Eletronics.prototype.test = function () {
        console.log("".concat(this.name, " has been tested"));
    };
    return Eletronics;
}());
exports.Eletronics = Eletronics;
