/*Objetivo - trocar a imagem de fundo com o botao
passo 1 - pegar o elemento html dos botoes
passo 2 - identificar o clique no botao(evento)
passo 3 - desmarcar o botao selecionado anterior
passo 4 - marcar o botao clicado como selecionado
passo 5 - esconder a imagem ativa anterior
passo 6  - fazer aparecer a imagem de fundo correspondente ao botão */

// passo 1:
const botoesCarrosel = document.querySelectorAll('.botao');//const atribui variavel constante
//passo 6 criar variavel com lista de imagens//
const imagens = document.querySelectorAll('.imagem');

//passo 2:
// const botao 1 = document.getElementById('botao1');
// botao1.addEventListener('click', () => {

// }) 
//for each =  para cada (laço)//
//indice = posicao do botao clicado '0,1,2,3,4,5'//
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //passo3//
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        //remove a classe selecionado.//
        //passo 4//
        botao.classList.add('selecionado');
        //passo 5//
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        //passo 6//
        //[] colchetes seleciona elementos da lista//
        imagens[indice].classList.add('ativa');
    })

})