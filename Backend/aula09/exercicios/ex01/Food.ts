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

    getType(): string {
        return this.type;
    }
    setType(type: string): string {
        return this.type = type;
    }

    getPrice(): number {
        return this.price;
    }
    setPrice(price: number): number {
        return this.price = price;
    }

    getName(): string {
        return this.name;
    }
    setName(name: string): string {
        return this.name = name
    }

    getWheight(): number {
        return this.wheight;
    }
    setWheight(wheight: number): number {
        return this.wheight = wheight;
    }
}