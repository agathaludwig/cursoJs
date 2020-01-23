const prod1 = {}

prod1.nome = "Produto"
prod1.valor = 3.98
prod1['Desconto Legal'] = 0.10 // evitar atribuição com espaço

console.log(prod1)

// ou 

const prod2 = {
    nome: "Outro Produto",
    valor: 5.55,
    desconto: 1,
    obj: {
        // é possível colocar obj dentro de obj
    }
}

console.log(prod2)