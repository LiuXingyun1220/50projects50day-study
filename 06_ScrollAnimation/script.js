const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
// 将checkBoxes()抽出来，在网页刚加载的时候也能让满足条件的Content显示
checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    }
    else {
      box.classList.remove('show')
    }
  })
}

