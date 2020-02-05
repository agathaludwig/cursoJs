// ES 2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'rua abc',
        numero: 25
    }
}
const {nome, idade} = pessoa // <- 'desconstruindo' o objeto
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // <- atribui o valor a uma variável

const {endereco} = pessoa // todo o conteudo
const {endereco: {logradouro}} = pessoa // seleciona dentro do bloco

console.log(logradouro)

// cuidar com arrays, pois o simbolo é o mesmo []

const [n1, , n3, , n5] = [1,2,3,4,5,6]
console.log(n1, n3, n5) // -> retorna 1, 3, 5
// isto é, o destructuring selecionou as posições que ele quer separar do array