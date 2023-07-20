var readlineSync = require('readline-sync');

// Exercícios:

//1. 

var minhaVar;

//2. 

minhaVar = 10

console.log(minhaVar);

//3. 

var soma
soma = 15 + 8
console.log(soma);

//4. 

soma +=1

//5.

soma *=3

//6.

console.log(soma);

//7.

var fazSol = true;

//8.

var comida = ["arroz", "feijão", "ovo"]

//9. 

console.log(comida[1]);

//10. 

var validaçãoTipo

if (soma === minhaVar) {
    validaçãoTipo = true
}
else {
    validaçãoTipo = false
}
console.log(validaçãoTipo);

//11. 

var valor


if ( minhaVar <= soma) {
    valor = true
}
else {
    valor = false
}
console.log(valor);

//12. 

var num1 = parseFloat(readlineSync.question("Digite o primeiro número da divisão:"))
var num2 = parseFloat(readlineSync.question("Digite o segundo número da divisão:"))

var divisãoNum


function divisão(num1, num2) {
    divisãoNum = (num1 / num2)
    return divisãoNum
}
console.log(divisão(num1, num2));

//13. 


var num1 = 10
var num2 = 2

function divisão(num1, num2) {
    divisãoNum = (num1 / num2)
    return divisãoNum
}
console.log(divisão(num1, num2));




