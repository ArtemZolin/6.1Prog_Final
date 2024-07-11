const swiper3 = document.querySelector('.swiper-services')
let mySwiper3
function mobileSlider3() {
  if (window.innerWidth < 768 && swiper3.dataset.mobile3 == 'false') {
    mySwiper3 = new Swiper(swiper3, {
      direction: 'horizontal',
      slidesOffsetBefore: 16,
      loop: true,
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
      el: '.swiper-pagination',
      clickable: ' true'
      }
    })

    swiper3.dataset.mobile2 = 'true'
  }

  if (window.innerWidth >= 768) {
    swiper3.dataset.mobile2 = 'false'

    if (swiper3.classList.contains('swiper-initialized')) {
      mySwiper3.destroy(true, true)
    }
  }
}
mobileSlider3()

window.addEventListener('resize', () => {
  mobileSlider3()
})
