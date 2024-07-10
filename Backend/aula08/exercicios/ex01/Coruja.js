"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coruja = void 0;
var Animal_1 = require("../../exemplos/01/Animal");
var Coruja = /** @class */ (function (_super) {
    __extends(Coruja, _super);
    function Coruja(nome, peso) {
        return _super.call(this, nome, peso) || this;
    }
    Coruja.prototype.voar = function () {
        console.log("".concat(this.getNome(), " voou"));
    };
    return Coruja;
}(Animal_1.Animal));
exports.Coruja = Coruja;
