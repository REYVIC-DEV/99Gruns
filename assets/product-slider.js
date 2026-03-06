window.productSliders = window.productSliders || {};

document.addEventListener("DOMContentLoaded", () => {
  initProductSliders();
});

function initProductSliders() {
  // Destroy existing sliders safely
  if (window.productSliders.thumb_swiper) {
    window.productSliders.thumb_swiper.destroy(true, true);
    window.productSliders.thumb_swiper = null;
  }

  if (window.productSliders.main_swiper) {
    window.productSliders.main_swiper.destroy(true, true);
    window.productSliders.main_swiper = null;
  }

  // Init thumbs
  window.productSliders.thumb_swiper = new Swiper(".product-thumb", {
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 500,
    watchSlidesProgress: true
  });

  // Init main slider
  window.productSliders.main_swiper = new Swiper(".product-slider", {
    slidesPerView: 1,
    spaceBetween: 100,
    speed: 0,
    thumbs: {
      swiper: window.productSliders.thumb_swiper
    }
  });
}
