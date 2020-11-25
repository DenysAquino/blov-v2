const hamburguer = document.querySelector('.menu__hamburguer')
const menuNav = document.querySelector('.menu__navbar')
const linha1 = document.querySelector('.menu__item-linha1')
const linha2 = document.querySelector('.menu__item-linha2')
const linha3 = document.querySelector('.menu__item-linha3')

const  menuHidden =  () => {
    menuNav.style.visibility = 'hidden';
    menuNav.style.animation = 'bottomTop 1s ease-in-out';
    linha1.style.transform = '';
    linha2.style.opacity = '1';
    linha3.style.transform = '';
}

const menuVisible = () => {
    menuNav.style.visibility = 'visible';
    linha1.style.transform = 'rotate(45deg) translate(6px, 5px)';
    linha2.style.opacity = '0';
    linha3.style.transform = 'rotate(-45deg) translate(5px, -4px)';
    menuNav.style.animation = 'topBottom 1s ease-in-out';
}

window.addEventListener('resize', () => {
    if (this.innerWidth >= '768') {
        menuVisible()
        return
    }
    return menuHidden()
})

hamburguer.addEventListener('click', () => {
    if (menuNav.style.visibility == 'visible') {
        menuHidden()
        return
    }
    return menuVisible()   
})


if(window.innerWidth >= '768'){
    menuVisible() 
}else {
    menuHidden()
}

