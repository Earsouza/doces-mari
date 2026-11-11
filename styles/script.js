const doceItens = document.querySelector('.doces-itens');
const slides = document.querySelectorAll('.doces-item');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');
const carouselStatus = document.getElementById('carousel-status');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
let posicaoAtual = 0;

function atualizarCarrossel() {
    if (!doceItens || slides.length === 0) return;

    doceItens.style.transform = `translateX(-${posicaoAtual * 100}%)`;
    if (carouselStatus) carouselStatus.textContent = String(posicaoAtual + 1).padStart(2, '0');
}

btnProximo?.addEventListener('click', () => {
    posicaoAtual = (posicaoAtual + 1) % slides.length;
    atualizarCarrossel();
});

btnAnterior?.addEventListener('click', () => {
    posicaoAtual = (posicaoAtual - 1 + slides.length) % slides.length;
    atualizarCarrossel();
});

menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    mainNav?.classList.toggle('is-open', !isOpen);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        mainNav?.classList.remove('is-open');
        menuToggle?.setAttribute('aria-expanded', 'false');
        menuToggle?.setAttribute('aria-label', 'Abrir menu');
    });
});
