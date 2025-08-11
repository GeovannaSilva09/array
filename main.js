'use strict'

function criarImagem (urlImagem){
    const galeria = document.getElementById('galeria')
    const img =  document.createElement('img')
    img.src = urlImagem

    galeria.appendChild(img)


}

function carregarImagens (){
    const imagens = [
      
        {
            nome: 'campanula',
            url: './img/campanula.webpb'
        },
        {
            nome: 'lirio',
            url: './img/lirio.jpeg'
        },
        {
            nome: 'margaridas',
            url: './img/margaridas.jpeg'
        },
        {
            nome: 'rosa',
            url: './img/rosa.webp'
        },
        {
            nome: 'violeta',
            url: './img/violeta.jpeg'
        },
        {
            nome: 'peonia',
            url: './img/peonia.jpg'
        },
        {
            nome: 'flor de lotus',
            url: './img/flor-de-lotus.webpb'
        },
        {
            nome: 'copo de leite',
            url: './img/copo-de-leite.jpeg'
        },
        {
            nome: 'coracao',
            url: './img/coracao.jpg'
        }

    ]

    imagens.forEach(criarImagem)

   
    // let contador = 0
    // const limite = imagens.length
    // while(contador < limite){
    //     console.log(imagens[contador])
    //     contador++

     // }


        

   
}



carregarImagens()