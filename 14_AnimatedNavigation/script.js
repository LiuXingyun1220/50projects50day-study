const toggle = document.querySelector('#toggle')

toggle.addEventListener('click', () => {
    // console.log(toggle.parentElement)
    toggle.parentNode.classList.toggle('active')
})