let numA = document.getElementById('numA')
let numB = document.getElementById('numB')
let form = document.getElementById('formulario')
let msg = document.getElementById('msg')

function validaNum(num1, num2) {
    if (Number(num1.value) > Number(num2.value)) {
        return true
    }
}

form.addEventListener('submit', function(num) {
    num.preventDefault()

    if (validaNum(numA, numB)) {
        msg.innerHTML = 'ERRO!'
    } else {
        msg.innerHTML = 'Tudo certo!'
    }

    numA.value = ''
    numB.value = ''
})