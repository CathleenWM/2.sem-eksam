const burgerMenu = document.querySelector("#burgerMenu");
const burgerMenuIcon = document.querySelector("#burgerMenuIcon")

const toggleBurgerMenu = () => burgerMenu.classList.toggle("hidden")

burgerMenuIcon.addEventListener("click", toggleBurgerMenu)

//  window.addEventListener("DOMContentLoaded",load);

// function load (){
//     document.querySelector("#burgerMenuIcon").addEventListener("click",openBurgerMenu); 
// }

// function openBurgerMenu (){
//     let burgerMenu = document.querySelector("#burgerMenu");
//     if (burgerMenu.style.display === "flex") {
//         burgerMenu.style.display = "none";
//     }
//     else {
//         burgerMenu.style.display = "flex"
//     }
// }