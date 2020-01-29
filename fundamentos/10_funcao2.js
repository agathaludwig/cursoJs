const imprimirSoma = function (a,b = 0) { 
    console.log(a+b)
}

imprimirSoma(2,3)

// funcao arrow

const soma = (a,b) => {
 return a+b   
}
console.log(soma(2,3))

// retorno implicito
const subtracao = (a,b) => a-b   
console.log(subtracao(2,3))

const imprimir = a => console.log(a) // se so tem um paramentro, pode ser suprimido

// função com operador ternário
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
// expressão relacional ? se verdadeiro : se falso
console.log(resultado(7.1))
console.log(resultado(6.1))
