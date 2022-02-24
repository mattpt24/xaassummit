const navbar = document.querySelector(".site-header");
const navLinks = document.querySelector(".nav-links");
const toggleBtn = document.querySelector(".nav-toggle-btn");


window.addEventListener("scroll", navbarScroll);
toggleBtn.addEventListener("click", dropNav);

function navbarScroll() {
    var topOfPage = window.scrollY;

    if(topOfPage >= 200) {
        navbar.classList.add("active-nav");
    }

    else {
        navbar.classList.remove("active-nav");
    }
}


function dropNav() {
    document.querySelector("nav").classList.toggle("active");
}


