'use strict'

function criarImagem (imagem){
    const galeria = document.getElementById('galeria')

    const img = document.createElement('img')
    const nome = document.createElement('p')

    img.src = imagem.url
    img.alt = imagem.nome
    nome.textContent = imagem.nome
    nome.classList.add("nome-imagem") // ou "p" se quiser manter

    galeria.appendChild(img)
    galeria.appendChild(nome)
}

function carregarImagens (){
    const imagens = [
        { nome: 'campanula', url: './img/campanula.webp' },
        { nome: 'lirio', url: './img/lirio.jpeg' },
        { nome: 'margaridas', url: './img/margaridas.jpeg' },
        { nome: 'rosa', url: './img/rosa.webp' },
        { nome: 'violeta', url: './img/violeta.jpg' },
        { nome: 'peonia', url: './img/peonia.jpg' },
        { nome: 'flor de lotus', url: './img/flor-de-lotus.webp' },
        { nome: 'copo de leite', url: './img/copo-de-leite.jpeg' },
        { nome: 'coracao', url: './img/coracao.jpg' }
    ]

    imagens.forEach(criarImagem)
}

carregarImagens()
