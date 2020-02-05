function tratarErroELancar(erro) {
    //throw new Error('Entre em contato')
    // pode ser uma mensagem, ou qlqlr coisa, como um objeto:
    throw {
        nome: erro.name,
        codigo: erro.codigo,
        mensagem: erro.msg,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // primeira tentativa
        console.log(obj.name.toUpperCase() + '!!!!')
    }
    catch (e) { // executa em caso de erro no try
        tratarErroELancar(e) 
    }
    finally {
        console.log('final') // executa o finally independente de try ou catch
    }
}

const obj = {nome: 'Roberto'} // caso de erro pq está digitado nome invés de name
imprimirNomeGritado(obj)