let array1: Array<number> = [1, 2, 3];
let array2: number[] = [1, 2, 3];

let objeto: { propriedadeString: String; propriedadeNumber: number } = {
  propriedadeString: "texto",
  propriedadeNumber: 123,
};

//parametro não obrigatorio
function frase(nome?: string): void {
  console.log("hello ", nome || "world!");
}
frase("mundo");

//objeto literal (javaScript)
let pessoa = {
  nome: "abc",
  idade: 123,
};

//typeScript classes e metodos
class Cachorro {
  nome: String;
  peso: Number;
  raca: String;

  constructor(nome: String, peso: Number) {
    this.nome = nome;
    this.peso = peso;
    this.raca = "raca";
  }

  latir(): void {
    console.log(`${this.nome}: latindo`);
  }

  correr(): void {
    console.log(`${this.nome}: correndo`);
  }

  comer(): void {
    console.log(`${this.nome}: comendo`);
  }
}
//instanciando classe Cachorro por meio de objetos
const cachorro1: Cachorro = new Cachorro("dog1", 5);
const cachorro2: Cachorro = new Cachorro("dog2", 4);
//chamando atributo
cachorro1.nome;
cachorro2.peso;
//chamando metodos da classe Cachorro atravez de objetos
cachorro1.latir();
cachorro2.correr();
