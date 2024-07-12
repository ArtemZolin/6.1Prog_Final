let block1Button = document.querySelector('.block-1-button-read')
let block1Box = document.querySelector('.block-1__box')
let block1ListText = document.querySelector('.block-1-button-read__text')
let block1Text = document.querySelector('.block-1__text')
let block1ButtonBefore = document.querySelector('.block-1-button-read__style')
block1Button.onclick = function () {
  if (block1ListText.textContent == 'Читать далее') {
    block1ListText.textContent = 'Скрыть'
    block1Text.style.height = 'auto'
   // block1Box.style.height = '15vh'
    block1Text.style.paddingBottom = '20px'
    block1ButtonBefore.style.transform = 'rotate(180deg)'
    
  } else {
    block1ListText.textContent = 'Читать далее'
    block1Text.style.height = '170px'
   // block1Box.style.height = '160px'
    block1Text.style.paddingBottom = '0px'
    block1ButtonBefore.style.transform = 'rotate(0deg)'
  }
}




