import { products } from "./products";

export class Food implements products {

    type: string;
    price: number;
    name: string;
    wheight: number;

    constructor(type: string, price: number, name: string, wheight: number) {
        this.type = type;
        this.price = price;
        this.name = name;
        this.wheight = wheight;
    }

    productTotalValue(quantity: number): void {
        console.log(`total buy price: ${quantity * this.price}`)
    }

}