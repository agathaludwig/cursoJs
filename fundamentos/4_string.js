const escola = "cod3r" // pode ser "" '' ``

console.log(escola.charAt(4)) // caracter nesta posição
console.log(escola.charCodeAt(4)) // valor ASCII nesta posição
console.log(escola.indexOf('3')) // posição que este caracter ocupa na string
console.log(escola.substring(1)) // omite tudo antes desta posição
console.log(escola.substring(0,3)) // exibe intervalo

console.log("Escola ".concat(escola).concat("!")) // concatena
console.log(escola.replace(3, 'e')) // substitui
console.log('Ana, Maria, Pedro'.split(','))