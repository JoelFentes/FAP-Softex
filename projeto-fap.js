const rl = require('readline-sync')


console.log("===== Cadastro ====");
console.log("======= Menu ======");
console.log("0 - Sair do Sistema");
console.log("1 - Listar Todos os Usuários");
console.log("2 - Cadastrar um Novo Usuário");
console.log("3 - Buscar um Novo Usuário");
console.log("4 - Alterar Usuário");
console.log("5 - Remover um Aluno");
console.log("===================");

let loop = true;
let arrayUsers = []
let notas = []
let matricula = 1

while (loop) {
    let options = rl.questionInt("Escolha uma opção: ")
    switch (options) {
        case 0:
                console.log("Saindo do Sistema...");
                loop = false
            break;
    
        case 1:
            if (!arrayUsers.length) {
                console.log(`O Banco está vázio, Cadastre um usuário para depois poder lista-lo`);
            } else {
                let soma = 0
                console.log("=== Lista de Usuários ===");
                for (const a of arrayUsers) {
                    console.log("Matrícula do Aluno: " + a.matricula);
                    console.log("Nome do Aluno: " + a.nome);
                    console.log("Notas do Aluno:");
                    for (let i = 0; i < a.notas.length; i++) {
                        console.log(`\t Nota ${i + 1}- ` + a.notas[i]);
                        soma += a.notas[i];
                    }
                    let media = soma / a.notas.length 
                    console.log(`A Média do Aluno é: ` + media);
                    console.log("=================");
              }
            }
            
            break;
    
        case 2:
            class User {
                constructor(matricula,nome, notas){
                    this.matricula = matricula
                    this.nome =  nome
                    this.notas =  notas
                }
            }
    
            nome = rl.question("Digite o nome: ")
            let nota1 = rl.questionFloat("Digite a primeira nota: ")
            let nota2 = rl.questionFloat("Digite a segunda nota: ")
            let nota3 = rl.questionFloat("Digite a terceira nota: ")
            notas.push(nota1, nota2, nota3)
           
    
            const newUser = new User(matricula, nome, notas);
            arrayUsers.push(newUser)
            matricula++
            
            break;
    
        case 3:
            let searchQuestion = rl.questionInt("Digite a matrícula do Aluno que você deseja encontrar: ")
            if (!arrayUsers.length) {
                console.log(`Não existem alunos, por favor, cadastre um.`);
            }
            else {
                let soma = 0
                const search = arrayUsers.find((arrayUsers) => arrayUsers.matricula === searchQuestion);
                console.log("Matrícula do Aluno: " + search.matricula);
                    console.log("Nome do Aluno: " + search.nome);
                    console.log("Notas do Aluno:");
                    for (let i = 0; i < search.notas.length; i++) {
                        console.log(`\t Nota ${i + 1}- ` + search.notas[i]);
                        soma += search.notas[i];
                    }
                    let media = soma / search.notas.length 
                    console.log(`A Média do Aluno é: ` + media);
                    console.log("=================");
            }
            break
    
        case 4:
            let changedUser = rl.questionInt(`Digite a matricula do usuário que você deseja alterar: `)
            const userC = arrayUsers.find((arrayUsers) => arrayUsers.matricula === changedUser);
            let alterarOp = rl.questionInt(`Digite o que você deseja alterar neste usuário, sendo 1 - Nome, 2 - Notas, 3 - Cancelar `)
            switch (alterarOp) {
                case 1:
                    let alterarValor = rl.question("Digite o novo valor: ")
                    userC.nome =  alterarValor
                    var soma = 0
                    console.log("Matrícula do Aluno: " + userC.matricula);
                    console.log("Nome do Aluno: " + userC.nome);
                    console.log("Notas do Aluno:");
                    for (let i = 0; i < userC.notas.length; i++) {
                        console.log(`\t Nota ${i + 1}- ` + userC.notas[i]);
                        soma += userC.notas[i];
                    }
                    var media = soma / userC.notas.length 
                    console.log(`A Média do Aluno é: ` + media);
                    console.log("=================");
                    break;
                case 2:
                    let nota1 = rl.questionFloat("Digite a primeira nota: ")
                    let nota2 = rl.questionFloat("Digite a segunda nota: ")
                    let nota3 = rl.questionFloat("Digite a terceira nota: ")
                    notas.push(nota1, nota2, nota3)
                    console.log(userC.notas);
                    break;
                case 3:
                    
                    break;
            
                default:
                    console.log("Digita algo válido cara de rato");
                    break;
            }

            break;
    
        case 5:
            
            break;
    
        default:
            console.log("Digite uma opção válida.");
            break;
    }
}
