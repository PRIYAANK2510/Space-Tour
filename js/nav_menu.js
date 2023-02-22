const navMenu = document.querySelector(".NavbarMenu");
const navButton = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");

navButton.addEventListener("click",()=>{
    if(navMenu.classList.contains('slide-out')){
        navMenu.classList.add('slide-in');
        navMenu.classList.remove('slide-out');
    }
})
closeBtn.addEventListener("click",()=>{
    if(navMenu.classList.contains('slide-in')){
        navMenu.classList.add('slide-out');
        navMenu.classList.remove('slide-in');
    }
})