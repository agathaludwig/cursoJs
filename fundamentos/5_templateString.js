const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"

// concatenacao
const template = `Olá ${nome}!`
console.log(concatenacao, template)

// expressao
console.log(`1+1= ${1+1}`)

// funcao
const up = texto=> texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)