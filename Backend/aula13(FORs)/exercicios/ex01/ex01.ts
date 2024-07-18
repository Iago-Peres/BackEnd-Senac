//fazer um contador que va de 10 ate 0 usando for
//a cada iteração o codigo deve verificar se o valor de i é par ou impar, se for par imprima no console a palavra 'TIC'
// se for impar imprimir 'TAC', quando chegar a zero imprimir 'BOOOM'

for (let i: number = 10; i > 0; i--) {
    if (i % 2 == 0) {
        console.log("TIC");
    } else if (i % 2 != 0) {
        console.log("TAC");
    }
}
console.log("BOOM");