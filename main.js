const rl = require('readline-sync');

/* Exercícios

1. Faça um programa que leia o nome do aluno, três notas e mostre o nome e a
média(aritmética) do aluno.*/
/* 
let aluno = rl.question("Digite o nome do aluno: ")
let n1 = rl.questionInt("Digite a nota 1: ")
let n2 = rl.questionInt("Digite a nota 2: ")
let n3 = rl.questionInt("Digite a nota 3: ")
let media = ((n1 + n2 + n3) / 3 )

console.log(`A média de ${aluno} foi: ${media}`);
 */
/* 
2. Faça um programa com Javascript para verificar se um determinado ano, fornecido
pelo usuário, é bissexto. Um ano é bissexto se for divisível por 400 ou se for divisível por
4 e não for divisível por 100.Exemplos: 1988, 1992, 1996, 2000. Repare que 1900 não é
bissexto. */

/* let ano = rl.questionInt("Digite o ano desejado: ")

function anoBissexto(ano) {
    if (ano % 400 == 0 || ano % 4 == 0 && !ano % 100 == 0) {
        console.log(`O ano ${ano}, é um ano bissexto`);
    } else {
        console.log(`O ano ${ano}, não é um ano bissexto`);
    }
}

anoBissexto(ano) */

/* 3. Uma determinada empresa vende seus produtos em quatro diferentes estados. Cada
estado possui uma taxação de imposto diferente sobre o produto (MG: 7%; SP: 12%; RJ:
15%; MS: 8%). Faça um programa em Javascript, que o usuário entre com o valor e o
estado destino do produto e o programa retorne o preço final do produto acrescido do
imposto correspondente ao estado onde será vendido. O programa deve mostrar uma
mensagem de erro caso o estado fornecido não esteja na lista de estados válidos.*/

/* let estado = rl.question("Digite o estado que voçê deseja calcular: (SP, MG, RJ ou MS) ")
let valor = rl.questionFloat("Digite o valor a ser calculado: ")



switch (estado) {
    case "SP":
        valor = valor + (valor * 12) / 100
        console.log(valor);
    break;
    case "MG":
        valor = valor + (valor * 7) / 100
        console.log(valor);
    break;
    case "RJ":
        valor = valor + (valor * 15) / 100
        console.log(valor);
    break;
    case "MS":
        valor = valor + (valor * 8) / 100
        console.log(valor);
    break;

    default:
        console.log("Erro, por favor escolha uma opção válida.");
        break;
}
 */
/* 4. Faça um programa que calcule e mostre a soma dos 50 primeiros números pares.
Faça três versões desse programa, cada uma usando uma estrutura de repetição
diferente (for, while, do-while). Qual das três estruturas é a mais adequada para este
programa? Por que?*/

/*for (let i = 0; i <= 50; i++) {
    console.log(i++);
}
 
let j = 0

while (j < 50) {
    console.log(j += 2);
}

let x = 0

do {
    console.log(x += 2);
} while (x < 50);*/

// A melhor forma de se fazer é o for, pois já temos um range definido.


/* 5. Faça um programa em Javascript que receba do usuário um número N e depois
imprima os N primeiros números naturais ímpares.*/

/* let num = rl.questionInt("Digite um número: ")

for (let i = 1; i <= num; i++) {
    console.log(i++);
    
} */


/* 6. Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que
solicite o número de dias trabalhados pelo encanador e imprima a quantia líquida que
deverá ser paga, sabendo-se que são descontados 8% para pagamento de impostos e
taxas devidas.*/

/* let valorDia = 30
let diasTrabalhados = rl.questionInt("Digite a quantidade de dias trabalhados pelo encanador: ")
let valorBruto =  valorDia * diasTrabalhados
let descontos = (valorBruto * 8) / 100
let valorLiquido = valorBruto - descontos

console.log(`Você deverá pagar ao encanador: R$${valorLiquido}0`);*/

/* 7. Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração,
em segundos, de uma experiência biológica. O programa deve informar o horário
(hora:minuto:segundo) de término da mesma.*/

let horario = rl.question("Digite o horário de início: Ex(hh;mm;ss)")

let arrayHorario = horario.split(";")

/* let duracao = 4 // Horas

arrayHorario[0] = arrayHorario[]
 */


/* 8. Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra.
Escreva um programa que leia o total de horas normais e o total de horas extras
trabalhadas por um empregado em um ano e calcule o salário anual deste trabalhador.*/

/*const horaNormal = 10
const horaExtra = 15 
let horaNormalTrabalhadas = rl.questionFloat("Digite o total de horas normais trabalhadas no ano: ")
let horaExtraTrabalhadas = rl.questionFloat("Digite o total de horas extras trabalhadas no ano: ")

let salarioAnual = horaNormal * horaNormalTrabalhadas + horaExtra * horaExtraTrabalhadas

console.log(salarioAnual);*/

/* 9. Elabore um programa em JS para que leia três números e mostre-os em ordem
crescente.*/

/* let num1 = rl.questionInt("Digite o número 1: ")
let num2 = rl.questionInt("Digite o número 2: ")
let num3 = rl.questionInt("Digite o número 3:")

let arrayNum = []

arrayNum.push(num1, num2, num3)

arrayNum.sort(function(a,b) {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0 
});

console.log(arrayNum);*/

/* 10. Crie um programa de conversão entre as temperaturas Celsius, Farenheit e Kelvin
usando funções para isso. O programa deve ler a opção escolhida pelo usuário, que
escolhe uma determinada conversão entre escalas termométricas e, em seguida, o
programa solicita a temperatura a ser convertida. As opções de conversão são as
seguintes: utilize o switch case


1.
de Celsius para Fahrenheit.

2.
de Celsius para Kelvin.

3.
de Fahrenheit para Celsius.

4.
de Fahrenheit para Kelvin.

5.
de Kelvin para Celsius.

6.
de Kelvin para Fahrenheit*/

let valor = rl.question("Digite a temperatura: ")
let conversao = rl.question("Digite qual conversão você quer realizar: Celsius para Fahrenheit | Celsius para Kelvin | Fahrenheit para Celsius | Fahrenheit para Kelvin | Kelvin para Celsius | Kelvin para Fahrenheit ")

switch (conversao) {
    case "Celsius para Fahrenheit":
        valor = valor * 33.8
        console.log(valor);
        break;
    case "Celsius para Kelvin":
        
        break;
    case "Fahrenheit para Celsius":
        
        break;
    case "Fahrenheit para Kelvin":
        
        break;
    case "Kelvin para Celsius":
        
        break;
    case "Kelvin para Fahrenheit":

        break;

    default:
        break;
}

/* 11. Fazer uma função que recebe um mês e um ano como parâmetros e retorna o
número de dias daquele mês daquele ano. Dica: um ano é bissexto quando é múltiplo de
4 e não múltiplo de 100, ou também quando é múltiplo de 400.
 */


/* 12. Faça uma função que recebe, por parâmetro, a hora de início e a hora de término de
um jogo, ambas subdivididas em 2 valores distintos: horas e minutos. A função deve
retornar, a duração do jogo em minutos, considerando que o tempo máximo de duração
de um jogo é de 24 horas e que o jogo pode começar em um dia e terminar no outro.*/

/* 13. Escreva a função para cálculo do N-ésimo termo da série de Fibonacci utilizando
recursividade */