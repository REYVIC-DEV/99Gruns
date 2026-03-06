window.recommendSlider = window.recommendSlider || {};

document.addEventListener("DOMContentLoaded", () => {
  initrecommendSlider();
});

function initrecommendSlider() {
  if (window.recommendSlider.main_swiper) {
    window.recommendSlider.main_swiper.destroy(true, true);
    window.recommendSlider.main_swiper = null;
  }

  // Init main slider
  window.recommendSlider.main_swiper = new Swiper(".recommend-slider", {
    slidesPerView: "auto",
    spaceBetween: 24,
    speed: 500,
    loop: true,
    watchOverflow: true,
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".recommend-swiper-button-next",
      prevEl: ".recommend-swiper-button-prev",
    },
    pagination: {
      el: ".recommend-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1440: {
        enabled: false,
      },
    },
  });
}
