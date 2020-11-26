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


  // painel de controle

  const checkboxArrow = document.getElementById('arrow') 
  function arrowChecked() {
      const listOfOptions = document.getElementById("select-options")
     if(checkboxArrow.checked) {
        listOfOptions.style.display = "none"
     } else {
        listOfOptions.style.display = "flex"

     }
  }