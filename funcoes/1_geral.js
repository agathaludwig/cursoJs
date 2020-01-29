// criar funcao literal
function func1() {}

// armazenar funcao em variavel
const func2 = function() {} // aqui a função é anônima

// armazenar em array
const array = [function (a, b) { return a+b}, func1, func2]
console.log(array[0](2,3))

// armazenar em atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa!'}
console.log(obj.falar())

// passar funcao como parametro
function run(fun) {
    fun()
}
run(function fun() {console.log('testando...')})

// uma funcao pode retornar ou conter outra funcao