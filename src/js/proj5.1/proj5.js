let brandButton = document.querySelector('.brands__button')
let servicesSoftware = document.querySelector('.services-software')
let brandsListText = document.querySelector('.brands__button__text')
let brandsList = document.querySelector('.brands-list')
let brandButtonBefore = document.querySelector('.brands__button__style')
brandButton.onclick = function () {
  if (brandsListText.textContent == 'Показать все') {
    brandsListText.textContent = 'Скрыть'
    brandsList.style.height = 'auto'
    servicesSoftware.style.height = 'auto'
    brandsList.style.paddingBottom = '20px'
    brandButtonBefore.style.transform = 'rotate(180deg)'
  } else {
    brandsListText.textContent = 'Показать все'
    brandsList.style.height = '180px'
    servicesSoftware.style.height = '322px'
    brandsList.style.paddingBottom = '0px'
    brandButtonBefore.style.transform = 'rotate(0deg)'
  }
}

const swiper = document.querySelector('.swiper')
let mySwiper
//let delSwiper = document.querySelector('.brands')
//let delSwiperList = document.querySelector('.brands-list')
function mobileSlider() {
  if (window.innerWidth < 768 && swiper.dataset.mobile == 'false') {
    mySwiper = new Swiper(swiper, {
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

    swiper.dataset.mobile = 'true'
  }

  if (window.innerWidth >= 768) {
    swiper.dataset.mobile = 'false'

    if (swiper.classList.contains('swiper-initialized')) {
      mySwiper.destroy(true, true)
    }
  }
}
mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider()
})
