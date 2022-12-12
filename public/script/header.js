window.addEventListener("DOMContentLoaded",load);

const burgerMenu = document.querySelector("#burgerMenu");
const burgerMenuIcon = document.querySelector("#burgerMenuIcon");

const toggleBurgerMenu = () => burgerMenu.classList.toggle("hidden");

function load (){
    burgerMenuIcon.addEventListener("click", toggleBurgerMenu);
    burgerMenuIcon.addEventListener("click", changeIcon)
}

function changeIcon (){
    burgerMenuIcon.classList.toggle("fa-bars")
    burgerMenuIcon.classList.toggle("fa-x")
}

