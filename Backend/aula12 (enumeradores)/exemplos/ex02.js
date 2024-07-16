var Direcoes;
(function (Direcoes) {
    Direcoes[Direcoes["Norte"] = 0] = "Norte";
    Direcoes[Direcoes["Sul"] = 1] = "Sul";
    Direcoes[Direcoes["Leste"] = 2] = "Leste";
    Direcoes[Direcoes["Oeste"] = 3] = "Oeste";
})(Direcoes || (Direcoes = {}));
for (var direcao in Direcoes) {
    console.log(direcao);
}
