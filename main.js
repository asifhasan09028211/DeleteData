const navMenu = document.getElementById("nav-menu"),
        toggleMenu = document.getElementById("nav-toggle"),
        closeMenu = document.getElementById("nav-close")
// show

toggleMenu.addEventListener("click",()=>{
        navMenu.classList.toggle('show');
});
// Hidden
closeMenu.addEventListener("click",()=>{
    navMenu.classList.remove('show');
});

// Remove Menu
const navLink = document.querySelectorAll(".nav_link");

const linkAction = ()=>{
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

// Scroll Sections Active Links
const section = document.querySelectorAll("section[id]")

window.addEventListener('scroll',scrollActive)

const scrollActive = ()=>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){
        document.querySelector('.nav_menu a[href*='+sectionId +']').classList.add('active')
    }else{
        document.querySelector('.nav_menu a[href*='+sectionId +']').classList.remove('active')
    }
}