
export interface products{
    type:string;
    price:number;
    name:string;
    wheight:number;

    productTotalValue(quantity:number):void;
}