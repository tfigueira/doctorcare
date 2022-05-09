window.addEventListener('scroll', onScroll)

onScroll ()
function onScroll (){
    showNavOnScroll() //inclui ou remove a class "scroll" no nav
    showBackToTopButtonOnScroll() //inclui ou remove a class "show" no botão backToTopButton

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

//funcao para analisar linha imaginaria
function activateMenuAtCurrentSection(section) {
    //ATENÇÃO - REMOVER TODOS OS CONSOLE.LOG DE TESTES E COMENTARIOS DESNECESSARIOS

    //linha alvo
    const targetLine = scrollY + innerHeight / 2
    
    //verificar se a seção passou da linha
    //quais dados vou precisar?

    //o topo da seção
    const sectionTop = section.offsetTop

    //a altura da seção 
    const sectionHeight = section.offsetHeight

    //o topo da seção chegou ou ultrapassou a lionha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    //informações dos dados e da lógica
    //console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

    //verificar se a base está abaixo da linha alvo
    //quais dados vou precisar?

    //a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    //o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    //limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }


}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
         } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
        backToTopButton.classList.add('show')
         } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu (){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

//função da Lib ScrollRevel para o efeito de scroll
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)

