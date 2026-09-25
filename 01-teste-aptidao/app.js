'use strict'
const botaoAvaliar = document.getElementById('avaliar')

function limparClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('apto')
    resultado.classList.remove('nao-apto')
}

function avaliartempo() {
    const tempo = document.getElementById('tempo').value
    const resultado = document.getElementById('resultado')
    limparClasses()
    if ( tempo < 14){
        resultado.textContent = 'apto'
        resultado.classList.add('apto')
    }
    else {
        resultado.textContent = 'nao apto'
        resultado.classList.add('nao-apto')
    }
}

botaoAvaliar.onclick = avaliartempo 