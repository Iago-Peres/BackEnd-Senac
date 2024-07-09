var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
var objeto = {
    propriedadeString: "texto",
    propriedadeNumber: 123,
};
//parametro não obrigatorio
function frase(nome) {
    console.log("hello ", nome || "world!");
}
frase("mundo");
//objeto literal (javaScript)
var pessoa = {
    nome: "abc",
    idade: 123,
};
//typeScript classes e metodos
var Cachorro = /** @class */ (function () {
    function Cachorro(nome, peso) {
        this.nome = nome;
        this.peso = peso;
        this.raca = "raca";
    }
    Cachorro.prototype.latir = function () {
        console.log("".concat(this.nome, ": latindo"));
    };
    Cachorro.prototype.correr = function () {
        console.log("".concat(this.nome, ": correndo"));
    };
    Cachorro.prototype.comer = function () {
        console.log("".concat(this.nome, ": comendo"));
    };
    return Cachorro;
}());
var cachorro1 = new Cachorro("dog1", 5);
var cachorro2 = new Cachorro("dog2", 4);
//chamando atributo
cachorro1.nome;
cachorro2.peso;
cachorro1.latir();
cachorro2.correr();
