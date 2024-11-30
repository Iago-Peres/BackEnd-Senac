//fazer um contador que va de 10 ate 0 usando for
//a cada iteração o codigo deve verificar se o valor de i é par ou impar, se for par imprima no console a palavra 'TIC'
// se for impar imprimir 'TAC', quando chegar a zero imprimir 'BOOOM'

for (var index = 10; index > 0; index--) {
    if (index % 2 == 0) {
        console.log("TIC");
    }else if (index % 2 != 0) {
        console.log("TAC");
    }
}
console.log("BOOM");
