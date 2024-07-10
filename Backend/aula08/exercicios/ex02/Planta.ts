
export class Planta{
    private viva:boolean;
    private nome:string;
    private cor:string;
    
    constructor(viva:boolean,nome:string,cor:string){
        this.viva = viva;
        this.nome = nome;
        this.cor = cor;
    }

    getNome():string{
        return this.nome;
    }
}