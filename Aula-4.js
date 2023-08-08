const readlineSync = require('readline-sync');
/* 
let nome = readlineSync.question("Digite seu nome: ")
let idade = readlineSync.questionInt("Digite sua idade: ")
let dia = readlineSync.questionInt("Digite o dia de seu nascimento: ")
let mes = readlineSync.questionInt("Digite o mês do seu nascimento: ")
let ano = readlineSync.questionInt("Digite o ano de seu nascimento: ")

function saudarFulano(nome, idade, dia, mes, ano) {
 
   console.log(`Boa tarde ${nome}, notei que você tem ${idade} anos, e nasceu no dia ${dia}/${mes}/${ano}. `);
}

saudarFulano(nome, idade, dia, mes, ano)

*/

//Exercícios 1.
/* 
function saudacao() {
    console.log("Olá Mundo!");
}

saudacao()

//2.

let num = readlineSync.questionFloat("Digite um número: ")

function dobro(num) {
   console.log(num*2);
}

dobro(num)

//3. 

let inicio = readlineSync.questionInt("Digite um número para iniciarmos a contagem: ")
let fim = readlineSync.questionInt("Digite um número para terminarmos a contagem: ")

function mostrarNumeros(inicio, fim) {
   for (let i = inicio; i <= fim; i++) {
     console.log(i);
   }
}

mostrarNumeros(inicio, fim)

//4. 

let numPar = readlineSync.questionInt("Digite um número para saber se ele é par ou não: ")

function verificarPar(numPar) {
   if (numPar % 2 === 0) {
      console.log("Esse número é par");
   } else {
      console.log("Esse número é impar");
   }
   
}

verificarPar(numPar)

//5. 

let frutas = ["Arroz", "Feijão", "Mandioca", "Cuscuz"]

function imprimirLista(frutas) {
   for (i = 0; i < frutas.length; i++) {
      console.log(frutas[i]);
    } 
}

imprimirLista(frutas)

 */
//Ex 2 | 1.

let numMedia = [5, 2]

function calcularMedia(numMedia) {
   let soma = numMedia[0] + numMedia[1]
   let media = soma/2
   console.log(media);
}

calcularMedia(numMedia)

//2. 

let numMaior = [1, 5, 21, 67, 2, 8, 5]

function maiorNum(numMaior) {
   let maior = Math.max.apply(null, numMaior );
   console.log(maior);
}

maiorNum(numMaior)

//3. 

let word = readlineSync.question("Digite qualquer palavra: ")

function contarVogais(params) {
   
}

//4. 

let numTabuada = readlineSync.questionInt("Digite um número inteiro e lhe daremos a sua tabuada: ")

for (let i = 1; i <= 10; i++) {
    console.log(numTabuada * i);
}

//5. 

let numPrimo = readlineSync.questionInt("Digite um número: ")

function verificarPrimo(numPrimo) {
   
}