let repairButton = document.querySelector('.repai-button')
let servicesSoftware = document.querySelector('.repairEquipment')
let repairListText = document.querySelector('.repai-button__text')
let repairList = document.querySelector('.repair-list')
let repairButtonBefore = document.querySelector('.repai-button--style')
repairButton.onclick = function () {
  if (repairListText.textContent == 'Показать все') {
    repairListText.textContent = 'Скрыть'
    repairList.style.height = 'auto'
    servicesSoftware.style.height = 'auto'
    repairList.style.paddingBottom = '20px'
    repairButtonBefore.style.transform = 'rotate(180deg)'
  } else {
    repairListText.textContent = 'Показать все'
    repairList.style.height = '180px'
    servicesSoftware.style.height = '322px'
    repairList.style.paddingBottom = '0px'
    repairButtonBefore.style.transform = 'rotate(0deg)'
  }
}
const swiper2 = document.querySelector('.repair')
let mySwiper2
//let delSwiper = document.querySelector('.repair')
//let delSwiperList = document.querySelector('.repair-list')
function mobileSlider2() {
  if (window.innerWidth < 768 && swiper2.dataset.mobile2 == 'false') {
    mySwiper2 = new Swiper(swiper2, {
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

    swiper2.dataset.mobile2 = 'true'
  }

  if (window.innerWidth >= 768) {
    swiper2.dataset.mobile2 = 'false'

    if (swiper2.classList.contains('swiper-initialized')) {
      mySwiper2.destroy(true, true)
    }
  }
}
mobileSlider2()

window.addEventListener('resize', () => {
  mobileSlider2()
})
