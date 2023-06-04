
const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector(".nav-menu");


console.log(hamburguesa);
console.log(menu);

hamburguesa.addEventListener("click", () =>{
    menu.classList.toggle("spread");
});




/*
navToggle.addEventListener("click", ()  =>{

navMenu.classList.toggle("nav-menu_visible")  
})
*/
