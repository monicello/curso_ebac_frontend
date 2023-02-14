let nome = document.getElementById('name')
let telefone = document.getElementById('number')
let linhas = ''

function adicionar() {

    let linha = '<tr>'
    linha += `<td>${nome.value}</td>`
    linha += `<td>${telefone.value}</td>`
    linha += '</tr>'

    linhas += linha
    
    let corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    nome.value = ''
    telefone.value = ''
    nome.focus()
}

