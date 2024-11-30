import { Pizza } from "./Pizza";
import { SaborPizza } from "./SaborPizza";

let pizza1: Pizza = new Pizza(SaborPizza.sabor2, "grande", 60);
let pizza2: Pizza = new Pizza(SaborPizza.sabor1, "media", 50);
let pizza3: Pizza = new Pizza(SaborPizza.sabor3, "pequena", 40);

console.log(pizza1.descricao());
console.log(pizza2.descricao());
console.log(pizza3.descricao());