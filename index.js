const navbarEl = document.querySelector("a.navbarhome");
const projectsEl = document.querySelector("a.navbarproject");
const aboutEl = document.querySelector("a.navbaraboutme");
const projectsSec = document.querySelector(".projects");
const aboutSec = document.querySelector(".aboutme");
const navbarMargin = document.querySelector(".banner-nav");

window.addEventListener("scroll", ()=>{

        if(window.scrollY < projectsSec.offsetTop - navbarMargin.offsetHeight - 80) {
           navbarEl.classList.add("home");
           projectsEl.classList.remove("projects");

        } else if (window.scrollY > projectsSec.offsetTop - navbarMargin.offsetHeight - 80 && window.scrollY < aboutSec.offsetTop - navbarMargin.offsetHeight - 80){
            navbarEl.classList.remove("home");
            aboutEl.classList.remove("aboutme");
            projectsEl.classList.add("projects");
        } else {
        projectsEl.classList.remove("projects");
        aboutEl.classList.add("aboutme");
        }
});
