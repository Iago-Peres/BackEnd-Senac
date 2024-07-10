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
exports.Arbusto = void 0;
var Arvore_1 = require("./Arvore");
var Arbusto = /** @class */ (function (_super) {
    __extends(Arbusto, _super);
    function Arbusto(viva, nome, cor, folhas, frutos) {
        return _super.call(this, viva, nome, cor, folhas, frutos) || this;
    }
    Arbusto.prototype.gerarFrutos = function () {
        console.log("".concat(this.getNome(), " deu frutos"));
    };
    return Arbusto;
}(Arvore_1.Arvore));
exports.Arbusto = Arbusto;
