//criar classe coruja, 3 atributos, 3 metodos, constructor,instanciar 2 objetos e chamar metodos
var Coruja = /** @class */ (function () {
    function Coruja(propnome, kg, cm) {
        this.nome = propnome;
        this.pesokg = kg;
        this.tamanhocm = cm;
    }
    Coruja.prototype.voar = function () {
        console.log("".concat(this.nome, " esta voando"));
    };
    Coruja.prototype.comer = function () {
        console.log("".concat(this.nome, " esta comendo"));
    };
    Coruja.prototype.pousar = function () {
        console.log("".concat(this.nome, " esta pousando"));
    };
    return Coruja;
}());
var coruja1 = new Coruja("coruja1", 1, 20);
var coruja2 = new Coruja("coruja2", 2, 30);
coruja1.voar();
coruja2.pousar();
