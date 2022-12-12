window.addEventListener("DOMContentLoaded",load);

const burgerMenu = document.querySelector("#burgerMenu");
const burgerMenuIcon = document.querySelector("#burgerMenuIcon");

const toggleBurgerMenu = () => burgerMenu.classList.toggle("hidden");

function load (){
    burgerMenuIcon.addEventListener("click", toggleBurgerMenu);
}
