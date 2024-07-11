//tipo, preço, nome e peso, 1 metodo ,3 classes que utilizem esta interface

export interface products{
    type:string;
    price:number;
    name:string;
    wheight:number;

    getType():string;
    setType(type:string):string;

    getPrice():number;
    setPrice(price:number):number;

    getName():string;
    setName(name:string):string;

    getWheight():number;
    setWheight(wheight:number):number;
}