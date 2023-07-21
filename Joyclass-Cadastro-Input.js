const readlineSync = require('readline-sync');

console.log("Iremos precisar de algumas informações para seu Cadastro, por favor preencha corretamente todas as perguntas abaixo:");
let name = readlineSync.question("Digite seu Nome:")
let address = readlineSync.question("Digite seu Endereço:")
let city = readlineSync.question("Digite sua Cidade:")
let cpf = readlineSync.question("Digite seu CPF:")
let rg = readlineSync.question("Digite seu RG:")
let age = readlineSync.question("Digite sua Idade:")
let fatherName = readlineSync.question("Digite o nome do seu Pai:")
let motherName = readlineSync.question("Digite o nome da sua Mãe:")
let weight = readlineSync.question("Digite seu Peso:")
let income = readlineSync.question("Digite sua Renda Bruta:")

console.log("Seu Cadastro está feito, confirme os dados a seguir:","Nome:",name,"," ,"Idade:",age,"," ,"Endereço",address,",", "Cidade:",city,",", "CPF:",cpf,",", "RG",rg,",",  "Nome do Pai:",fatherName,"," ,"Nome da Mãe:",motherName,"," ,"Peso:",weight,"," ,"Renda Bruta:",income);