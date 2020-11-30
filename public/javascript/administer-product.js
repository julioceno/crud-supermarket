const checkboxMenuHamburguer = document.getElementById('menu-hamburguer')
const header = document.getElementById('header')
const appearMenu = document.getElementById('appear-menu')
const panelControls = document.getElementById('panel-controls')

function menuHamburguer() {
  
    if (checkboxMenuHamburguer.checked) {
        header.style.background = "var(--color-cyan)"
        appearMenu.style.display = "block"
        panelControls.style.display = "none"
    } else {
        header.style.background = "var(--color-blue)"
        appearMenu.style.display = "none"
        panelControls.style.display = "block"
    }


    let windowWidth = window.innerWidth;
    if (windowWidth > 1100) {
        header.style.background = "var(--color-blue)"
        appearMenu.style.display = "none"
    }
}

  window.addEventListener('resize', function(){
      menuHamburguer();
  });


  /*  painel de controle */

  // arrow
  const checkboxArrow = document.getElementById('arrow') 
  function arrowChecked() {
      const listOfOptions = document.getElementById("select-options")
     if(checkboxArrow.checked) {
        listOfOptions.style.display = "flex"
     } else {
        listOfOptions.style.display = "none"
     }
  }


  // select option
const contentOption = document.getElementById('option') 
document.querySelectorAll('.select-options li a').forEach(link => {
    link.onclick = function(e) {
        e.preventDefault()
        fetch(link.href)
            .then(resp => resp.text())
            .then(html => contentOption.innerHTML = html)
    }
})


// Click automático
const clickCreate = document.getElementById('create').click()


// popup 
const popup = document.getElementById('popup')
document.body.onclick = function(e) {
    popup.style.display = "none"
}

// pegando o hash 
const message = (window.location.href).split('?message=')[1]
if (message === "id&not&registered") {
    popup.style.display = "flex"
}