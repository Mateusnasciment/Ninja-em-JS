function imprimirDado(dado) {
    console.log(dado)
    console.log('outras tarefas');
}

imprimirDado(function () {
    return "olá mundo"
})