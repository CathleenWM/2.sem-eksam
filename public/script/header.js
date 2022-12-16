const burgerMenu = document.querySelector("#burgerMenu");
const burgerMenuIcon = document.querySelector("#burgerMenuIcon");
const windowPane = document.querySelector("main");


window.addEventListener("DOMContentLoaded",load);

function load (){
    burgerMenuIcon.addEventListener("click", toggleBurgerMenu);
    windowPane.addEventListener("click", closeBurgerMenu);
}

function toggleBurgerMenu (){
    animation()
    burgerMenu.classList.toggle("hidden");
    burgerMenuIcon.classList.toggle("fa-bars");
    burgerMenuIcon.classList.toggle("fa-x");
}

function closeBurgerMenu (){
    if (!burgerMenu.classList.contains("hidden")){
        windowPane.addEventListener("click", toggleBurgerMenu);
    } else {
        windowPane.removeEventListener("click", toggleBurgerMenu);
    }
}

const rest = (duration = 1000) => {
    return new Promise(resolve => setTimeout(resolve, duration))
}

async function animation () {
    const headerHeight = document.querySelector('header').clientHeight
    const menuHeight = 173
    let sizes = []

    for (let index = -(menuHeight - headerHeight); index < headerHeight; index++) {
        sizes.push(index)
    }

    for (let index = 0; index < sizes.length; index++) {
        burgerMenu.style.top = sizes[index] + 'px'
        await rest(2)
    }
}