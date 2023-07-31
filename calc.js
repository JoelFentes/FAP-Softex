const readlineSync = require('readline-sync');

let n1 = readlineSync.questionFloat("Digite o primeiro número: ")
let n2 = readlineSync.questionFloat("Digite o segundo número: ")
let options = readlineSync.question("Escolha a operação a ser feita, Ex: soma, multiplicação... ")

switch (options) {
    case "soma": 
        console.log(n1 + n2);
        break;
    case "subtração": 
        console.log(n1 - n2);
        break;
    case "multiplicação": 
        console.log(n1 * n2);
        break;
    case "divisão": 
        console.log(n1 / n2);
        break;
    default:
        console.log("Por favor, escolha uma opção válida");
}