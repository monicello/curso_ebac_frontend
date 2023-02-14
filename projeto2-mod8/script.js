let nome = document.getElementById('name')
let telefone = document.getElementById('number')
cadastrados = []
let linhas = ''

function resultado() {
    let ultLinha = '<tr>'
    ultLinha += `<td><strong>Adicionados</strong></td>`
    ultLinha += `<td><strong>${cadastrados.length}</strong></td>`
    ultLinha += '</tr>'

    let footTabela = document.querySelector('tfoot')
    footTabela.innerHTML = ultLinha
}

function adicionar() {
    if (nome.value.length == 0 || telefone.value.length == 0) {
        alert('Digite um contato para adicionar')
    } else {
        let linha = '<tr>'
        linha += `<td>${nome.value}</td>`
        linha += `<td>${telefone.value}</td>`
        linha += '</tr>'

        linhas += linha
        
        let corpoTabela = document.querySelector('tbody')
        corpoTabela.innerHTML = linhas
        cadastrados.push(nome.value)

        nome.value = ''
        telefone.value = ''
        nome.focus()

        resultado()
    }
}

