"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
var Food = /** @class */ (function () {
    function Food(type, price, name, wheight) {
        this.type = type;
        this.price = price;
        this.name = name;
        this.wheight = wheight;
    }
    Food.prototype.buy = function (quantity) {
        console.log("total buy price: ".concat(quantity * this.price));
    };
    return Food;
}());
exports.Food = Food;
