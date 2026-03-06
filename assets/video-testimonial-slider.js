document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.slider-vid-testimonial', {
        speed: 400,
        spaceBetween: 20,
        slidesPerView: 5,
        loop: true,
        centeredSlides: false,
        pagination: {
            el: '.swiper-pagination-tv',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-tv',
            prevEl: '.swiper-button-prev-tv',
        },
        breakpoints: {
            0:{
                centeredSlides: true,
                slidesPerView: 'auto',
            },
            767:{
            }
        }
    });
})