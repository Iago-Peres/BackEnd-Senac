const readlineSync = require("readline-sync");

function positivoNegativo(numero) {
    if (numero > 0) {
        console.log(`o numero ${numero} e positivo`);
    } else if (numero < 0) {
        console.log(`o numero ${numero} e negativo`);
    } else if (numero == 0) {
        console.log(`${numero}`);
    } else {
        console.log("nao e um numero");
    }
    let pausa = readlineSync.question("\naperte uma tecla para voltar ao menu: ");
    menu();
}

function login(loginSenha) {
    const senha = "123";
    if (loginSenha.includes(senha)) {
        console.log("login bem sucediso!");
    } else {
        console.log("senha incorreta");
    }
    let pausa = readlineSync.question("\naperte uma tecla para voltar ao menu: ");
    menu();
}

function calculadoraBasica(n1, operacao, n2) {
    let result = 0;
    if (operacao == "+") {
        result = n1 + n2;
    } else if (operacao == "-") {
        result = n1 - n2;
    } else if (operacao == "*") {
        result = n1 * n2;
    } else if (operacao == "/") {
        result = n1 / n2;
    } else {
        console.log("operacao invalida");
    }
    console.log(`\n ${n1} ${operacao} ${n2} = ${result}`);
    let pausa = readlineSync.question("\naperte uma tecla para voltar ao menu: ");
    menu();
}

function maiorDeTres(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(`o maior é ${n1}`);
    } else if (n2 > n1 && n2 > n3) {
        console.log(`o maior é ${n2}`);
    } else if (n3 > n1 && n3 > n2) {
        console.log(`o maior é ${n3}`);
    } else {
        console.log("valores iguais ou incorretos");
    }
    let pausa = readlineSync.question("\naperte uma tecla para voltar ao menu: ");
    menu();
}

function exibirMenu() {
    console.clear();
    console.log("\n1.positivoNegativo: ");
    console.log("2.login: ");
    console.log("3.calculadoraBasica: ");
    console.log("4.maiorDeTres: \n");
}

function menu() {
    exibirMenu();
    let key;
    let n1;
    let n2;
    let n3;
    let operacao;

    while (key !== 0) {
        exibirMenu();
        key = readlineSync.questionInt("selecionar funcao: ");
        switch (key) {
            case 1:
                console.clear();
                n1 = readlineSync.questionInt("escolha um numero: ");
                positivoNegativo(n1);
                break;
            case 2:
                console.clear();
                let loginSenha = readlineSync.question("digite a senha: ");
                login(loginSenha);
                break;
            case 3:
                console.clear();
                n1 = readlineSync.questionInt("primeiro numero: ");
                operacao = readlineSync.question("operacao matematica: ");
                n2 = readlineSync.questionInt("segundo numero: ");
                calculadoraBasica(n1, operacao, n2);
                break;
            case 4:
                console.clear();
                n1 = readlineSync.questionInt("primeiro numero: ");
                n2 = readlineSync.questionInt("segundo numero: ");
                n3 = readlineSync.questionInt("terceiro numero: ");
                maiorDeTres(n1, n2, n3);
                break;
            default:
                break;
        }
    }
}
menu();