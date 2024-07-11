import { CarInterface } from "./CarInterface";

export class Car implements CarInterface {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number,) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    startEngine(): void {
        console.log(`o carro modelo ${this.model} esta ligando...`)
    }

    tst():void{
        console.log("tst");
    }

}