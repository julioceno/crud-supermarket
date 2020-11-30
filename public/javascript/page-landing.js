const checkboxMenuHamburguer = document.getElementById('menu-hamburguer')
const header = document.getElementById('header')
const appearMenu = document.getElementById('appear-menu')
const search = document.getElementById("search")


function menuHamburguer() {
  
    if (checkboxMenuHamburguer.checked) {
        header.style.background = "var(--color-cyan)"
        appearMenu.style.display = "block"
        search.style.display ="none"
    } else {
        header.style.background = "var(--color-blue)"
        appearMenu.style.display = "none"
        search.style.display ="flex"
    }


    let windowWidth = window.innerWidth;
    if (windowWidth > 1100) {
        header.style.background = "var(--color-blue)"
        appearMenu.style.display = "none"
        search.style.display ="flex"
    }
}

  window.addEventListener('resize', function(){
      menuHamburguer();
  });

// mensagem de erro
const errorContainer = document.getElementById("message-error")
const message = (window.location.href).split('?message=')[1]
console.log(message)
if (message === "product&not&avaliable") {
    errorContainer.style.display = "block"
}