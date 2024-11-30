"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana[DiasDaSemana["Segunda"] = 0] = "Segunda";
    DiasDaSemana[DiasDaSemana["Terca"] = 1] = "Terca";
    DiasDaSemana[DiasDaSemana["Quarta"] = 2] = "Quarta";
    DiasDaSemana[DiasDaSemana["Quinta"] = 3] = "Quinta";
    DiasDaSemana[DiasDaSemana["Sexta"] = 4] = "Sexta";
    DiasDaSemana[DiasDaSemana["Sabado"] = 5] = "Sabado";
    DiasDaSemana[DiasDaSemana["Domingo"] = 6] = "Domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
//console.log(DiasDaSemana); //Saida: 0
function diaMensagem(dia) {
    if (dia === void 0) { dia = readlineSync.question(""); }
    switch (dia) {
        case DiasDaSemana.Segunda:
            return "comeca a semana";
        case DiasDaSemana.Terca:
            return "e terca feira";
        case DiasDaSemana.Quarta:
            return "e quarta feira";
        case DiasDaSemana.Quinta:
            return "e quinta feira";
        case DiasDaSemana.Sexta:
            return "e sexta feira";
        case DiasDaSemana.Sabado:
            return "e sabado";
        case DiasDaSemana.Domingo:
            return "e domingo";
    }
}
console.log(diaMensagem(2));
