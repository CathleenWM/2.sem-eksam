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



// const circle = 'fa-circle'
// const check = 'fa-check-circle'
// const toggler = document.getElementById('toggle')
// toggle.onclick = () => {
//   toggler.classList.toggle(circle)
//   toggler.classList.toggle(check)
// }