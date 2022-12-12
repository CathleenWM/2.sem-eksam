const burgerMenu = document.querySelector("#burgerMenu");
const burgerMenuIcon = document.querySelector("#burgerMenuIcon");
const windowPane = document.querySelector("#windowPane");

window.addEventListener("DOMContentLoaded",load);

function load (){
    burgerMenuIcon.addEventListener("click", toggleBurgerMenu);
    windowPane.addEventListener("click", closeBurgerMenu, toggleBurgerMenu);
}

function toggleBurgerMenu (){
    burgerMenu.classList.toggle("hidden");
    burgerMenuIcon.classList.toggle("fa-bars");
    burgerMenuIcon.classList.toggle("fa-x");
}

function closeBurgerMenu (){
    if (burgerMenu.classList.contains("hidden")){
        
    }
    burgerMenu.classList.add("hidden");
}