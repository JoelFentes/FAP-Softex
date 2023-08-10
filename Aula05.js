let readlineSync = require('readline-sync');

// Exercícios 1.
/* 
let nome = readlineSync.question("Digite seu nome: ")

function exibirSaudacao(nome, saudacao="Olá") {
    if (nome === "") {
        console.log(`${saudacao}, meu amigo(a)! É um prazer ter você testando o meu código :)`);
    }
    else {
        console.log(`${saudacao}, ${nome}! É um prazer ter você testando o meu código :)`);
    }
    
}

exibirSaudacao(nome, saudacao="Olá") 

//2.

let num1 = readlineSync.questionInt("Digite o primeiro número da operação: ")
let num2 = readlineSync.questionInt("Digite o segundo número da operação: ")
let op = readlineSync.question("Digite a operação desejada, Ex: +, -, /, *: ")

function calculadora(num1, num2, op) {
    switch (op) {
        case "+":
            console.log(num1 + num2);
            break;
    
        case "-":
            console.log(num1 - num2);
            break;
    
        case "/":
            console.log(num1 / num2);
            break;
    
        case "*":
            console.log(num1 * num2);
            break;
    
        default:
            console.log("Por favor, Digite uma opção válida.");
            break;
    }
}

calculadora(num1, num2, op)

//3. 

let inicio = readlineSync.questionInt("Digite um número para iniciarmos a contagem regressiva: ")

function contagemRegressiva(inicio) {
    for (let i = inicio; i > 0; i--) {
        console.log(i);
    }
    
}

contagemRegressiva(inicio)

*/

//4.
/* 
let nome = readlineSync.question("Digite seu nome: ")
let idade = readlineSync.question("Digite sua idade: ")
let profissao = readlineSync.question("Digite sua profissão: ")


function apresentacao(nome, idade, profissao) {
    if (nome === "") {
        console.log(`Olá, eu sou Fulaninho, tenho ${idade} anos e sou ${profissao}.`);
    } 
    else if (idade === "") {
        console.log(`Olá, eu sou ${nome}, tenho X anos e sou ${profissao}.`);
    } 
    else if (profissao === "") {
        console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou NI(Não Informado).`);
    } 
    else if (nome === "" && idade === "") {
        console.log(`Olá, eu sou Fulaninho, tenho X anos e sou ${profissao}.`);
    } 
    else if (idade === "" && profissao === "") {
        console.log(`Olá, eu sou ${nome}, tenho X anos e sou NI(Não Informado).`);
    } 
    else if (nome === "" && profissao === "") {
        console.log(`Olá, eu sou Fulaninho, tenho ${idade} anos e sou NI(Não Informado).`);
    } 
    else {
        console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`);
    }
    
}

apresentacao(nome, idade, profissao) */
/* 
let texto = readlineSync.question("Digite um texto: ")
let estilo = readlineSync.question("Escolha o estilo do texto: Ex: negrito, normal, itálico ")
let estilolc = estilo.toLowerCase()


function mensagemPersonalizada(texto, estilolc) {
    if (estilolc === "") {
        estilolc = "negrito"
    }
    switch (estilolc) {
        case "negrito":
            console.log(`${texto} <- Negrito`);
            break;
        case "normal":
            console.log(`${texto} <- Normal`);
            break;
        case "itálico":
            console.log(`${texto} <- Itálico`);
            break;
        default:
            console.log("Por favor, Digite um valor válido.");
            break;
    }
}

mensagemPersonalizada(texto, estilolc) */
/* 
let nome = readlineSync.question("Digite seu nome: ")

function criarSaudacao(nome) {
    let mensagem = `Olá, ${nome}!`;
    return mensagem;

}

let mensagemSaudacao = criarSaudacao(nome);

console.log(mensagemSaudacao); */

/* 
//1. 

let num1 = readlineSync.questionInt("Digite o primeiro número da operação: ")
let num2 = readlineSync.questionInt("Digite o segundo número da operação: ")

function somar(num1, num2) {
    let soma = num1 + num2;
    return soma;
}

//2.

let numP = readlineSync.questionInt("Digite um número para conferir se é par ou não: ")

function ehPar(numP) {
    if (numP % 2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(ehPar(numP));

//3.
 */
num1 = readlineSync.questionInt("Digite o primeiro número: ")
num2 = readlineSync.questionInt("Digite o segundo número: ")
let num3 = readlineSync.questionInt("Digite o terceiro número: ")


function maiorNum(num1, num2, num3) {
    let array = [num1, num2, num3]
    let orarray = array.sort(function(a, b) {
    return b - a;
});
    return orarray[0]
}

console.log(maiorNum(num1, num2, num3));

//4.

let peso = readlineSync.questionInt("Digite seu peso em KG: ")
let altura = readlineSync.questionFloat("Digite sua altura em Metros: ")

function calcularIMC(peso, altura) {
    let imc = (peso / (altura*2));
    return imc;
    
}

console.log(calcularIMC(peso, altura));

