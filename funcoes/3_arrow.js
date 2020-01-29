let dobro = function (a) {
    return 2*a
}
// arrow
dobro = (a) => {
    return 2*a
}
// arrow reduzida devido a 1 parametro e a 1 linha (que é o retorno)
dobro = a => 2*a

// sem parametro
ola = () => 'Ola'

console.log(ola())