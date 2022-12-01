const burgerMenu = document.querySelector("#burgerMenu");
const burgerMenuIcon = document.querySelector("#burgerMenuIcon")

const toggleBurgerMenu = () => burgerMenu.classList.toggle("hidden")

burgerMenuIcon.addEventListener("click", toggleBurgerMenu)