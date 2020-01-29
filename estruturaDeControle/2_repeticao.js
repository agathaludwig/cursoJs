// while () {}

// do {} while()

// for
for (let i=1; i<=10; i++) {
    console.log(`i = ${i}`)
}

const notas = [4.5, 6.7, 2.3, 6,2]
for (let i=1; i<notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}

// for/in: array ou objeto // é mais comum o uso em objetos
for (let i in notas) {
    console.log(`nota = ${notas[i]}`)
}
const pessoa = {
    nome: 'Ana',
    sobrenome: 'silva',
    idade: 21,
    peso: 65
}
for (let atributo in pessoa) { // é ideal usar o let para declarar o valor para que seja local
    console.log(`${atributo} => ${pessoa[atributo]}`)
}

// break e continue -> o uso é desencorajado (desvio de fluxo)

// break: switch, for, while -> interrompe, sai do laço
// continue: for, while -> interrompe e vai pra próxima repetição
