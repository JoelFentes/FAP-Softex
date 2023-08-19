const readlineSync = require('readline-sync');
/* 
function somaRecursiva(n) {
   if (n <= 1) {
        return 1
   }
   else {
        return n + somaRecursiva(n - 1)
   }
}


console.log(somaRecursiva(10));


function fibonacci(x) {
    if (x <= 0) {
        return 1
    }
    if (x <= 1) {
        return 1
    }
    else {
        return fibonacci(x - 1) + fibonacci(x - 2)
    }
}

console.log(fibonacci(10));
 */

// Exceptions
/* Crie um programa que recebe do teclado um número e tenta dividir por
zero dentro de um bloco try...catch. Capture o erro e o exiba "Erro:
Divisão por zero" no console. */
/* 
let divisor = readlineSync.questionInt("Digite um número para dividir: ")
let dividendo = readlineSync.questionInt("Digite um número para ser dividido: ")

try {
    if (divisor === 0) {
        throw "da não paizão"
    }
} catch (error) {
    console.log("Erro: Divisão por zero");
}

console.log(dividendo/divisor);

/* Crie um programa que recebe do teclado uma string não numérica em um
número utilizando parseInt dentro de um bloco try...catch. Capture o erro
e o exiba "Erro: Conversão inválida" no console. */
/*
let str = readlineSync.question("Digite um texto: ")
let strnew = parseInt(str)


try {
    if (isNaN(strnew)) {
        throw "da não"
    }
    
} catch (error) {
    console.log("Erro: Conversão inválida");
}

 */
/* Crie um programa que recebe do teclado um objeto e tente acessar uma
propriedade inexistente desse objeto dentro de um bloco try...catch.
Capture o erro e o exiba "Erro: Propriedade não encontrada" no console. */

class Pessoa {
    constructor(nome, sobreNome, idade, cpf, profissao){
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.idade = idade;
        this.cpf = cpf;
        this.profissao = profissao;
    }
}
const nome = readlineSync.question("Digite o nome da pessoa: ");
const sobreNome = readlineSync.question("Digite o sobrenome da pessoa: ");
const idade = readlineSync.questionInt("Digite a idade da pessoa: ");
const cpf = readlineSync.questionInt("Digite o cpf da pessoa: ");
const profissao = readlineSync.question("Digite a profissão da pessoa: ");


const pessoa = new Pessoa(nome, sobreNome, idade, cpf, profissao);

const atributo = readlineSync.question("Digite o atributo que deseja visualizar: ");


try {
    if (pessoa.hasOwnProperty(atributo)) {
        console.log(`Atributo:`, pessoa[atributo]);
    } 
    else {
        throw new Error("Atributo inserido não encontrado no objeto.");
    }
} catch (error) {
    console.error(error.message);
}




