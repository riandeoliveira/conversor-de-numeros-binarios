 // Arrow function que verifica a opção selecionada dos input's do tipo radio. Ela também chama uma outra função.
 const verificaOpcao = () => {
    if (document.getElementById("decbin").checked) {
        verificaErro()
        decimalBinario()
    }

    else if (document.getElementById("bindec").checked) {
        verificaErro()
        binarioDecimal()
    }
    else verificaErro()
}

const redefinir = () => location.reload()

// Função que transforma decimal em binário.
const decimalBinario = () => {
    var valor = document.getElementById("valor").value
    var num = Number(valor)
    var resultado = num.toString(2)
    document.getElementById("resultado").value = resultado
}

// Função que transforma binário em decimal.
const binarioDecimal = () => {
    var valor = document.getElementById("valor").value
    var resultado = parseInt(valor, 2)
    document.getElementById("resultado").value = resultado
}

// Função para verificar erros do usuário e notificá-lo com mensagens.
const verificaErro = () => {
    var valor = document.getElementById("valor").value
    if (valor == "")
        alert("Digite um número primeiro!")
    else if (isNaN(valor)) {
        alert("Digite um número válido!")
        location.reload()
    }
    else if (valor < 0) {
        alert("Digite um número maior que zero!")
        location.reload()
    }
    else if (document.getElementById("decbin").checked == false && document.getElementById("bindec").checked == false)
        alert("Selecione uma opção!")
}