import { MetodosDePagamento } from "./MetodosDePagamento";
import { MenuPrincipal } from "../menu/MenuPrincipal";

export class Dinheiro implements MetodosDePagamento {

    pagar(): void {
        console.log("as compras foram pagas em dinheiro");
        new MenuPrincipal().carrinho = [];
        new MenuPrincipal().carrinhoPrecos = [];
    }
}