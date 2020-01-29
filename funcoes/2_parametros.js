// uma funcao pode nao ter argumentos e receber depois

function soma() {
    let soma = 0
    for (i in arguments){
    soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1, 3))
console.log(soma(1, 4, 7, 8))
console.log(soma('a', 'b', 'c'))

// parametro padrão ec2015
function soma1 (a = 1, b = 2, c = 3) {
return a+b+c
}
console.log(soma1())