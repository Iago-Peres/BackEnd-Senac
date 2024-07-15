import { MetodosDePagamento } from "./MetodosDePagamento";
import { MenuPrincipal } from "../menu/MenuPrincipal";


export class Pix implements MetodosDePagamento {

    pagar(): void {
        console.log("as compras foram pagas com pix");
        new MenuPrincipal().carrinho = [];
        new MenuPrincipal().carrinhoPrecos = [];
    }

}