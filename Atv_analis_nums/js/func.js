let numero = window.document.getElementsByTagName("input")[0]
let lista = window.document.getElementById("lista")
let valores = []
var resultado = window.document.getElementById('res')


function isnumero(numero) {
    if (Number(numero) >= 1 && Number(numero <= 100)) {
        return true
    }
    else {
        return false
    }

}

function inlista(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1) {
        return true
    }
    else {
        return false
    }

}

function adicionar() {
    if (isnumero(numero.value) && !inlista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement("option")
        item.innerHTML = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
    }
    else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    numero.value = ''
    numero.focus()
    resultado.innerHTML = ''
}

function analisar() {

    if (valores.length == 0) {
        window.alert('Adicione valores antes de analisar')
    }
    else {
        let tot = valores.length
        let maxval = valores[0]
        var minval = valores[0]
        var soma = 0
        var media = 0

        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maxval) {
                maxval = valores[pos]
            }

            if (valores[pos] < minval) {
                minval = valores[pos]
            }
        }
        media = soma / tot

        resultado.innerHTML = `Resultado:<br><br>`

        resultado.innerHTML += `Quantidade de números cadastrados: ${tot}<br><br>
        O Maior número informado foi: ${maxval}<br><br>
        O menor número informado foi: ${minval}<br><br>
        A soma dos valores é equivalente a: ${soma}<br><br>
        A média dos valores digitados é: ${media.toFixed(2)}`
    }

}

function limpar()
{
        window.document.querySelector("option#option")
        resultado.innerHTML = ''
        numero.value = ''
        numero.focus()
        lista.innerHTML=''
        option.innerHTML+='Digite um número acima'
}