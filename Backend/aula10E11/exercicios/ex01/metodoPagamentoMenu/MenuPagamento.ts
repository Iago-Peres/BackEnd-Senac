import { MetodosDePagamento } from "./MetodosDePagamento";
import { Pix } from "./pix";
import { Dinheiro } from "./Dinheiro";
import { CartaoDeCredito } from "./CartaoDeCredito";
import { MenuPrincipal } from "../menu/MenuPrincipal";
import * as readlineSync from "readline-sync";

export class MenuPagamento implements MetodosDePagamento {
    opcaoPagamento: number;
    pausa:string;

    constructor(opcaoPagamento: number) {
        this.opcaoPagamento = opcaoPagamento;
    }

    pagar(): void {
        switch (this.opcaoPagamento) {
            case 1:
                dinheiro.pagar();
                this.pausa = readlineSync.question("");
                new MenuPrincipal().opcaoMenuPrincipal();
                break;
            case 2:
                cartao.pagar();
                this.pausa = readlineSync.question("");
                new MenuPrincipal().opcaoMenuPrincipal();
                break;
            case 3:
                pix.pagar();
                this.pausa = readlineSync.question("");
                new MenuPrincipal().opcaoMenuPrincipal();
                break;
            case 4:
                new MenuPrincipal().opcaoMenuPrincipal();
                break;
            default:
                console.log("opcao invalida");
                this.pagar();
                break;
        }

    }

}

let pix: Pix = new Pix();
let cartao: CartaoDeCredito = new CartaoDeCredito();
let dinheiro: Dinheiro = new Dinheiro();