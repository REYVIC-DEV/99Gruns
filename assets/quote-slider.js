document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.quote-slider', {
        speed: 400,
        spaceBetween: 100,
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        pagination: {
            el: '.quote-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})
