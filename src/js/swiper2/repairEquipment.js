let repairButton = document.querySelector('.repair-button')
let repairEquipment = document.querySelector('.repair-equipment')
let repairListText = document.querySelector('.repair-button__text')
let repairList = document.querySelector('.repair-list')
let repairButtonBefore = document.querySelector('.repair-button--style')
repairButton.onclick = function () {
  if (repairListText.textContent == 'Показать все') {
    repairListText.textContent = 'Скрыть'
    repairList.style.height = 'auto'
    repairEquipment.style.height = 'auto'
    repairList.style.paddingBottom = '20px'
    repairButtonBefore.style.transform = 'rotate(180deg)'
  } else {
    repairListText.textContent = 'Показать все'
    repairList.style.height = '180px'
    repairEquipment.style.height = '322px'
    repairList.style.paddingBottom = '0px'
    repairButtonBefore.style.transform = 'rotate(0deg)'
  }
}



const swiper2 = document.querySelector('.swiper-repair')
let mySwiper2
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
