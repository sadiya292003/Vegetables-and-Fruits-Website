var swiper = new swiper(".home", {
    spaceBetween: 30,
    centeredslides: true,
   navigation: {
        nextE1: "swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    }
