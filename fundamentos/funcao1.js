// Sem retorno
function imprimirSoma(a,b) {
console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) // se passar apenas um numero, o segundo sera UNdefined, assim, o resultado é NaN

// Com retorno
function soma(a,b = 0) { // aqui estamos dizendo que b será zero se não informado
    return a+b
}

console.log(soma(2,3))