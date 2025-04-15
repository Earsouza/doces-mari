// Lógica do Carrossel em Loop
const doceItens = document.querySelector('.doces-itens');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');
let posicaoAtual = 0;
const totalItens = document.querySelectorAll('.doces-item').length;

btnProximo.addEventListener('click', () => {
    posicaoAtual = (posicaoAtual + 1) % totalItens;
    doceItens.style.transform = `translateX(-${posicaoAtual * 100}%)`;
});

btnAnterior.addEventListener('click', () => {
    posicaoAtual = (posicaoAtual - 1 + totalItens) % totalItens;
    doceItens.style.transform = `translateX(-${posicaoAtual * 100}%)`;
});

// Navegação entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
