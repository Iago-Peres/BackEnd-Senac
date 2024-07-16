enum DiasDaSemana {
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo,
}

//console.log(DiasDaSemana); //Saida: 0

function diaMensagem(dia: DiasDaSemana): string {
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
