// muitas formas, não é somente true e false
let isAtivo = false

// verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = false))

// falsos
console.log(!!0)
console.log(!!'') //-> vazio
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!(isAtivo = false))

let nome = ''
console.log(nome || 'Desconhecido')
// se colocou nome informa nome, se permaneceu vazio, imprime desconhecido