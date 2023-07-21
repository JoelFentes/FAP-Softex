var readlineSync = require('readline-sync');

function cadastro(); {
    console.log("Iremos precisar de algumas informações para seu Cadastro, por favor preencha corretamente todas as perguntas abaixo:");
    let name = readlineSync.question("Digite seu Nome:")
    let address = readlineSync.question("Digite seu Endereço:")
    let city = readlineSync.question("Digite sua Cidade:")
    let cpf = readlineSync.question("Digite seu CPF, Somente números:")
        for (typeof cpf !== Number, console.log("Por favor digite um número!");) {
            return cpf
        } 
        console.log(cpf);
}
