//Animaçoes da pagina

ScrollReveal().reveal('.intro-home h2', {
    duration: 1000,
    origin: 'top',
    distance: '50px',
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('.intro-home p', {
    duration: 1000,
    origin: 'bottom',
    distance: '30px',
    easing: 'ease-in-out',
    interval: 200,
    reset: false
});

ScrollReveal().reveal('.cta-button', {
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    scale: 0.8,
    easing: 'ease-in-out',
    reset: false
});

// Animação para os itens da galeria
ScrollReveal().reveal('.gallery .item', {
    duration: 1000,
    scale: 0.9,
    distance: '30px',
    interval: 100,
    easing: 'ease',
    reset: false
});

// Animação para os depoimentos
ScrollReveal().reveal('.testimonial:nth-child(1)', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
    reset: false
});
ScrollReveal().reveal('.testimonial:nth-child(2)', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    reset: false
});
ScrollReveal().reveal('.testimonial:nth-child(3)', {
    duration: 1000,
    origin: 'right',
    distance: '50px',
    reset: false
});