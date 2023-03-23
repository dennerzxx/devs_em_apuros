let botaoAdicionar = document.querySelector('#botaoAdd')
// adicionando evento ao botão click
botaoAdicionar.addEventListener('click', function (evento){
    //impede a natureza padrão do elemento
    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let funcionario = obtemFuncionarioDoForm(form)

    adicionaFuncionarioNaTabela(funcionario)

    form.reset()
})

function obtemFuncionarioDoForm(form){
    let funcionario = {
        nome: form.nome.value,
        trabalho: form.trabalho.value,
        cargo: form.cargo.value,
        data_in: form.data_in.value,
        data_ter: form.data_ter.value
    }

    return funcionario
}

function adicionaFuncionarioNaTabela(funcionario){
    let funcionarioTr = montarTr(funcionario)
    let tabela = document.querySelector('#tabela-funcionario')
    tabela.appendChild(funcionarioTr)
}

function montarTr(funcionario){
    //createElemete cria um novo elemento de html
    let funcionarioTr = document.createElement('tr')
    funcionarioTr.classList.add('funcionario')

    //Fazendo filhos de elemntos html
    funcionarioTr.appendChild(montarTd(funcionario.nome, "info-nome"))
    funcionarioTr.appendChild(montarTd(funcionario.trabalho, "info-work"))
    funcionarioTr.appendChild(montarTd(funcionario.cargo, "info-unidade"))
    funcionarioTr.appendChild(montarTd(funcionario.data_in, "info-data_in"))
    funcionarioTr.appendChild(montarTd(funcionario.data_ter, "info-data_ter"))

    return funcionarioTr
}

function montarTd(dado, classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}