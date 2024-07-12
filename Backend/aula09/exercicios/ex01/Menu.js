"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Food_1 = require("./Food");
var Eletronics_1 = require("./Eletronics");
var Clothes_1 = require("./Clothes");
var readlineSync = require("readline-sync");
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.showMenu = function () {
        console.log("1- add to chart");
        var option = readlineSync.question("select option: ");
    };
    return Menu;
}());
var menu = new Menu;
menu.showMenu();
var food1 = new Food_1.Food("fruit", 1, "apple", 1);
var eletronic1 = new Eletronics_1.Eletronics("keyboard", 100, "keyboard-xcba", 1);
var clothe1 = new Clothes_1.Clothes("winterCoat", 100, "coat", 1);
