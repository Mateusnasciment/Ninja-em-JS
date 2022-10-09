///promisses
let aceitar = false
console.log('pedir uber')

const Promessa = new Promise((resolve, reject) => {
    if (aceitar) {
    return resolve('o uber chegou') 
    }
    return reject('pedido neggado!')
})
console.log('pedindo negado')

Promessa
.then(reject => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log ('finalizado'))