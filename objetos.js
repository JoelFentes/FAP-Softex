// Objeto vazio
/* 
const objetoVazio = {}

//

const Pessoa = {}

Pessoa.nome = "João"
console.log(Pessoa.nome);

//

const usuario = {}

usuario.idade = 18

console.log(usuario.idade);

// 

const produto = {
    preco: 50
}

produto.preco = 75;
console.log(produto.preco);

//

const contato = {
    email: "joelfentes@gmail.com"
}

delete contato.email

console.log(contato);

//

const cliente = {

}

cliente.endereco = "Rua A, 123"

console.log(cliente);

*/
//

const empresa = {
    departamentos: [
        {departamentoNome1: "rh"},
        {departamentoNome2: "design"},
        {departamentoNome3: "sei lá"},
        {departamentoNome4: "sei não"}
    ]
} 

console.log(empresa.departamentos[0].departamentoNome1);

//

const aluno = {
    notas: [85, 90, 78]

}

aluno.notas[1] = 95

console.log(aluno.notas[1]);