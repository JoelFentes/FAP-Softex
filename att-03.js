/* const readlineSync = require('readline-sync');

let saboresSorvete = ["Morango", "Chocolate", "Napolitano", "Pistache"]
console.log(saboresSorvete[3]);

// Atribui outro valor ao indice 3

saboresSorvete[3] = "Flocos"
console.log(saboresSorvete[3]);

saboresSorvete.push("Cuscuz com Leite");
console.log(saboresSorvete);

// Remove o Valor

delete saboresSorvete[saboresSorvete.length-1];
console.log(saboresSorvete);

// Substitui o valor removido por um novo

saboresSorvete[saboresSorvete.length-1] = "Picanha"
console.log(saboresSorvete);


// Remove o Item
saboresSorvete.splice(2,1);
console.log(saboresSorvete); */

// Exercícios | 1.

const meuArray = [10, 20, 30, 40, 50];

let segundoElemento = meuArray[1]
console.log(segundoElemento);

//2. 

const frutas = ["maça", "banana", "uva", "manga"];
console.log("O 'tamanho' do array é", frutas.length);

//3. 

frutas.push("pera")
console.log(frutas);

//4. 

frutas.splice(0,1)
console.log(frutas);

//5. 

const numeros = [10, 20, 30, 40, 50];
//numeros.push(25)

if (numeros.includes(25) === false) {
    console.log("O número '25' não está incluso na lista");

}   else {
    console.log("O número '25' está incluso na lista");
}