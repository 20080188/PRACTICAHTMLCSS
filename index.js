
const header = document.querySelector(".header");
const menu = document.querySelector(".nav-menu");


console.log(header)
console.log(menu)

header.addEventListener("click", () =>{
    menu.classList.toggle("spread");
});




/*
navToggle.addEventListener("click", ()  =>{

navMenu.classList.toggle("nav-menu_visible")  
})
*/
