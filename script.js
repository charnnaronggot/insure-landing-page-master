const button = document.querySelector(".btn-menu-toggle");
const navbar = document.querySelector(".hiding-menu");

button.addEventListener("click" ,   () => {
    navbar.classList.toggle("hiding-menu-active");
})