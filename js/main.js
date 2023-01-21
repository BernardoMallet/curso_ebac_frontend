$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })
    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereçoCompleto: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira seu e-mail.',
            telefone: 'Por favor, insira o seu número de telefone.',
            cpf: 'Por favor, insira o seu CPF.',
            endereçoCompleto: 'Por favor, insira o seu endereço completo.',
            cep: 'Por favor, insira o seu CEP.'
        },
        submitHandler: function(form) {
            $('input').val('');
            alert('Dados enviados com sucesso!');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})