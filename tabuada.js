const readlineSync = require('readline-sync');

let num = readlineSync.questionInt("Digite um número inteiro e lhe daremos a sua tabuada: ")

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
}