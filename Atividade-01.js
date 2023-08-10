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
*/


//Estruturas de Decisão 
//Exercício 1.

let num = parseFloat(readlineSync.question("Digite um numero:"))

function positiveNum(num) {
    if (num >= 0) {
        console.log("Seu número é positivo");
    }
    else {
        console.log("Seu número é negativo");
    }
}
positiveNum(num)

//2. 


let num2 = parseFloat(readlineSync.question("Digite um numero:"))

function evenNum(num2) {
    if (num2 % 2 == 0) {
        console.log("Seu número é par");
    } 
    else {
        console.log("Seu número é impar");
    }
}
evenNum(num2)

//3.

let str = readlineSync.question("Digite algo:")

function strV(str) {
    if (str === ("")) {
        console.log("O dado está vazio!");
        
    } 
    else {
        console.log("Obrigado por nos ajudar")
    }
}
strV(str)

//4. 

let numb = parseFloat(readlineSync.question("Digite um número:"))

function maiorQueDez(numb) {
    if (numb > 10) {
        console.log("Seu número é maior que 10");
    } else {
        console.log("Seu número é menor que 10");
    }
}

maiorQueDez(numb)

//5.

let a = true

function booleano(a) {
    if (a === true || a === false) {
        console.log("Sua variavel é booleana")    
    
    } 
    else {
        console.log("Esse tipo de variavel não é booleano")
    }
}

booleano(a)

//Exercícios pt2


let num = parseFloat(readlineSync.question("Digite um numero:"))

function positiveNum(num) {
    if (num >= 0) {
        console.log("Seu número é positivo");
    }
    else {
        console.log("Erro!");
    }
}
positiveNum(num)


let num2 = parseFloat(readlineSync.question("Digite um numero:"))

function evenNum(num2) {
    if (num2 % 2 == 0) {
        console.log("Seu número é par");
    } 
    else {
        console.log("Seu número é impar");
    }
}
evenNum(num2)

let str = readlineSync.question("Digite algo:")

function strVali(str) {
    if (str === ("")) {
        console.log("A string está vazia!");
        
    } 
    else {
        console.log("Você digitou:", str)
    }
}
strVali(str)

let numb = parseFloat(readlineSync.question("Digite um número:"))

function maiorQueDez(numb) {
    if (numb > 10) {
        console.log("Seu número é maior que 10");
    } 
    else {
        numb *= 2
        console.log(numb);
    }
}

maiorQueDez(numb)


Exercício pt3

1.
*/

let numero = readlineSync.question("Digite um número")

function classNum(numero) {
    if (numero == 0) {
        console.log("Seu número é neutro(zero)!");
    } 
    else if (numero > 0) {
        console.log("Seu número é positivo!");
    }
    else {
        console.log("Seu número é negativo!");
    }
}

classNum(numero)

//2.

let numero = readlineSync.question("Digite um número")

function divNum(numero) {
   if (numero / 2 % 0 && numero / 3 % 0  ) {
    console.log();
   } 
   else {
    
   }
}

divNum(numero)
