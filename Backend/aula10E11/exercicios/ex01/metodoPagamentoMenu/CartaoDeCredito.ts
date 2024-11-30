import { MetodosDePagamento } from "./MetodosDePagamento";
import { MenuPrincipal } from "../menu/MenuPrincipal";


export class CartaoDeCredito implements MetodosDePagamento {

    pagar(): void {
        console.log("as compras foram pagas com cartao de credito");
        new MenuPrincipal().carrinho = [];
        new MenuPrincipal().carrinhoPrecos = [];
    }
}
