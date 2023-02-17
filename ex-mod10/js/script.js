$(document).ready(function(){

    $('#icpf').mask('000.000.000-00');

    $('#itelefone').mask('(00) 00000-0000');

    $('#icep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            
        },
        messages: {
            nome: 'Por favor, digite seu nome'
        
        },

        submitHandler: function(form) {
            alert('Enviado!')

        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campo(s) incorreto(s)`)
            }
        }
    })
})

