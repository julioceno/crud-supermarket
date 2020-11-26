const header = document.getElementById('header')
const appearMenu = document.getElementById('appear-menu')
const checkboxMenuHamburguer = document.getElementById('menu-hamburguer')

function menuHamburguer() {

    if (checkboxMenuHamburguer.checked) {
        header.style.background = "var(--color-cyan)"
        appearMenu.style.display = "block"
    } else {
        header.style.background = "var(--color-blue)"
        appearMenu.style.display = "none"
    }
}

