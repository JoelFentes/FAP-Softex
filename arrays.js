const readlineSync = require('readline-sync');

/* const usuarios = [

    {nome: "Halland", idade: 22},
    
    {nome: "Cristiano", idade: 38},
    
    {nome: "Messi", idade: 36},
    
    {nome: "Neymar", idade: 31 },
    
    {nome: "Mbappe", idade: 23},
    
    {nome: "Ribamar", idade: 26},
    
]; */

// For tradicional

/* for (let i = 0; i < usuarios.length; i++) {
    console.log(`Nome do Jogador: ${usuarios[i].nome}, Idade: ${usuarios[i].idade} anos`);
 
}
 */
// For... In
/* 
for (let i in usuarios) {
    console.log(`Nome do Jogador: ${usuarios[i].nome}, Idade: ${usuarios[i].idade} anos`);
}

 */

// For... Of
/* 
for (let i of usuarios) {
    console.log(`Nome do Jogador: ${i.nome}, Idade: ${i.idade} anos`);
    
} */

/* const numeros = [150, 100, 200, 250, 50];

for (let i of numeros) {
    console.log(i);
}
const palavras = ["cadeira", "lapis", "caneta", "caderno", "mesa"];

for (let a of palavras) {
    console.log(a);
}
const logicos = [true, false, true, false, true];

for (let x of logicos) {
    console.log(x);
}

*/
/* 
let objeto = {
    a: 10, 
    b: 20, 
    c: 30, 
    d: 40
}

let soma = 0
for (let i in objeto) {
    soma += objeto[i]
}

console.log(soma); */
/* 
let numeros = [12, 5, 8, 21, 16, 7]
let numerospar = []

for (let i in numeros) {
    if (i % 2 === 0) {
        numerospar.push(numeros[i])  
    }
}

console.log(numerospar); */
/* 
let estudantes = { 
    alice: 18, 
    bob: 20, 
    carol: 19, 
    david: 21 
}

for (let i in estudantes) {
    if (estudantes[i] === 19) {
        console.log(`Nome do estudante:${i}`);
    }
}
 */

let pontos = [ 
    [2, 5, 8], 
    [3, 9, 12], 
    [4, 6, 10] 
];

let soma = 0

for (let l in pontos) {
    for (let c in pontos[l]) {
        soma += pontos[l][c]
    }
}

console.log(soma);