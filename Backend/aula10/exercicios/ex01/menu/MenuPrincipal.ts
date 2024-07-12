import * as readlineSync from "readline-sync";
import { Alimentos } from "../produtos/Alimentos";
import { Eletronicos } from "../produtos/Eletronicos";
import { Roupas } from "../produtos/Roupas";


class MenuPrincipal {
    carrinho: string[] = [""];

    constructor(carrinho: string) {
        
        this.carrinho[0] = carrinho;
    }

    mostrarMenuPrincipal():void{
        console.log("1- comprar.")
        console.log("\n2- ver carrinho.")
        console.log("\n3- pagar.")
        console.log("\n4- sair.")
    }

    opcaoMenuPrincipal():void{
        console.clear();
        this.mostrarMenuPrincipal();
        let opcao:number = 0;
        opcao = parseInt(readlineSync.question("escolha uma opcao:"));
        while(opcao > 3){
            switch (opcao) {
                case 1:
                    comprar();
                    break;
                case 2:
                    verCarrinho();
                    break;
                case 3:
                    Pagar();
                    break;   
                case 4:
                    console.log("saindo...");
                    break;     
                default:
                    break;
            }
        }
    }

    comprar():void{
        console.log(`1- ${alimento1.nome}| preco: ${alimento1.calcularValorTotal}`);
        console.log(`2- ${eletronico1.nome}| preco: ${eletronico1.calcularValorTotal}`);
        console.log(`3- ${roupa1.nome}| preco: ${roupa1.calcularValorTotal}`);
        let opcao = parseInt(readlineSync.question("selecionar produto:"));
        
    }

}

let alimento1:Alimentos = new Alimentos("legume","batata",2);
let eletronico1:Eletronicos = new Eletronicos("perifericos",100,"teclado",1);
let roupa1:Roupas = new Roupas("roupaDeCima",100,"camiseta", 1);