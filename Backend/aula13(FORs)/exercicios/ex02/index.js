"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza_1 = require("./Pizza");
var SaborPizza_1 = require("./SaborPizza");
var pizza1 = new Pizza_1.Pizza(SaborPizza_1.SaborPizza.sabor2, "grande", 60);
var pizza2 = new Pizza_1.Pizza(SaborPizza_1.SaborPizza.sabor1, "media", 50);
var pizza3 = new Pizza_1.Pizza(SaborPizza_1.SaborPizza.sabor3, "pequena", 40);
console.log(pizza1.descricao());
console.log(pizza2.descricao());
console.log(pizza3.descricao());
