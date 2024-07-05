/* 2.Login Simples: Crie uma variável com uma senha (por exemplo, "1234"). Solicite ao usuário que insira uma senha e verifique se a senha inserida corresponde à senha armazenada. Exiba uma mensagem de "Login bem-sucedido" ou "Senha incorreta". */
const readlineSync = require("readline-sync");
const senha = "wsd123";
const loginSenha = readlineSync.question("digite a senha: ");

if (loginSenha.includes(senha)) {
    console.log("login bem sucediso!");
} else {
    console.log("senha incorreta");
}