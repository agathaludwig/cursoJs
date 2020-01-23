const valores = [1, 2, 3, 4]

console.log(valores[4]) // retorna undefined

// assim como se inserirmos um valor no index 10, teremos 6 index vazios:
valores[10] = 11
console.log(valores)

console.log(valores.length)

// adicionar valores (heterogeneo)
valores.push({id:3}, false, null, 'teste', 4.44)
console.log(valores)

console.log(valores.pop) // retira o ultimo elemento
delete valores [0] // retira o valor na posicao selecionada