'use strict'

const calcular = document.getElementById("calculardesconto")

function calculardescontos() {
    const preco = document.getElementById("precooriginal").value
    const desconto = document.getElementById("desconto").value
    const calculodesconto = preco * (desconto / 100)
    const resultado = preco - calculodesconto

    resultadododesconto.textcontent = resultado
}

calcular.onclick = calculardescontos

