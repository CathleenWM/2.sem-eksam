const burgerMenu = document.querySelector("#burgerMenu");
const burgerMenuIcon = document.querySelector("#burgerMenuIcon");
const windowPane = document.querySelector("#windowPane");


window.addEventListener("DOMContentLoaded",load);

function load (){
    burgerMenuIcon.addEventListener("click", toggleBurgerMenu);
    windowPane.addEventListener("click", closeBurgerMenu);
}

function toggleBurgerMenu (){
    animation()
    burgerMenu.classList.toggle("hidden");
    // const burgerMenuHeight = burgerMenu.clientHeight;
    // console.log(burgerMenuHeight); // Height=173
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

const headerHeight = document.querySelector('header').clientHeight
const menuHeight = 173
let sizes = []

for (let index = -(menuHeight - headerHeight); index < headerHeight; index++) {
    sizes.push(index)
}

async function animation () {
    for (let index = 0; index < sizes.length; index++) {
        burgerMenu.style.top = sizes[index] + 'px'
        await sleep(5)
    }
}

// array fra 1-x(173)
// document selector
// get element height 173
// assign to const

// current index = 0
// while loop current index less than height
// append current index to array
// increment current index



