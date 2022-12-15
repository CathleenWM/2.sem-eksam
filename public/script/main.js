const header = document.querySelector('header')
const main = document.querySelector('main')

const setPadding = () => main.style.paddingTop = header.clientHeight + 'px'

window.addEventListener('resize', () => {
    setPadding()
})
setPadding()