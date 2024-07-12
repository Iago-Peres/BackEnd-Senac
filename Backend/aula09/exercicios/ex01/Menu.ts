import { Food } from "./Food";
import { Eletronics } from "./Eletronics";
import { Clothes } from "./Clothes";
import * as readlineSync from "readline-sync";

class Menu {
    constructor(){
    }

    showMenu():void{
        console.log("1- buy producs.")
        console.log("\n2- view chart.");
        console.log("\n3- buy chart contents.");
        console.log("\n4- exit.");
        this.selectOption();
    }

    selectOption(){
        let option:number = 0;
        while(option !== 5){
            option = Number(readlineSync.question("\n\nselect option: "));
            switch (option) {
                case 1:
                    this.productList();
                    break;
                case 2:
                    viewChart();
                    break;    
                case 3:
                    break;
                case 4:
                    console.log("closing...")
                    break;  
                default:
                    break;
            }
        }
    }

    productList():void{
        console.log(`1- ${food1.name}, cost :${food1.price}`);
        console.log(`2- ${eletronic1.name}, cost :${eletronic1.price}`);
        console.log(`3- ${clothe1.name}, cost :${clothe1.price}`);
        this.selectProduct();
    }

    viewChart():void{
        
    }

}

let menu:Menu = new Menu;
menu.showMenu();

const food1: Food = new Food("fruit", 1, "apple", 1);
const eletronic1: Eletronics = new Eletronics("keyboard", 100, "keyboard-xcba", 1);
const clothe1: Clothes = new Clothes("winterCoat", 100, "coat", 1);

