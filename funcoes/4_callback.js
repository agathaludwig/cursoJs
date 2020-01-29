// padrao observer de projeto

const fabricantes = ["mercedes", "bmw", "audi"]

function imprimir(nome, indice) {
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)

// exemplo array: .filter
// função callback para cada elemento