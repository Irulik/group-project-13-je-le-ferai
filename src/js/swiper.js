const swiper = new Swiper('.productsSwiper', {
  // Optional parameters
  direction: 'horizontal',
  
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 18,
    grabCursor: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
    clickable: true,
  }
});