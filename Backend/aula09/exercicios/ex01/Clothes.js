"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clothes = void 0;
var Clothes = /** @class */ (function () {
    function Clothes(type, price, name, wheight) {
        this.type = type;
        this.price = price;
        this.name = name;
        this.wheight = wheight;
    }
    Clothes.prototype.buy = function (quantity) {
        console.log("total buy price: ".concat(quantity * this.price));
    };
    Clothes.prototype.tryOn = function () {
        console.log("the ".concat(this.name, " fits"));
    };
    return Clothes;
}());
exports.Clothes = Clothes;
