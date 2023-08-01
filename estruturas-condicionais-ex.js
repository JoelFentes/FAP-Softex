const readlineSync = require('readline-sync');

let resposta = readlineSync.question("Responda as perguntas com 'sim' ou 'não' para sabermos qual é o seu veiculo. Seu veiculo cabe apenas uma pessoa? ")


function veiculos(resposta) {
    if (resposta === "sim") {
        let resposta = readlineSync.question("Esse veiculo é pesado? ")
        if (resposta === "sim") {
            console.log("O transporte escolhido foi um trator!");
        } else {
            console.log("O transporte escolhido foi uma bicicleta!");
        }
    } 
    else if (resposta === "não"){
        console.log("O transporte escolhido foi uma moto!");
    }
    else {
        console.log("Digite uma resposta válida!");
    }
}

veiculos(resposta)