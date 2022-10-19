let humb = document.querySelector('.burger');
let navMenu = document.querySelector('.ul-link');

function mobileMenu(){
    humb.classList.toggle('active');
    navMenu.classList.toggle('active');
}

humb.addEventListener('click', mobileMenu);

const navLink = document.querySelectorAll('.nav-link');

function closeMenu(){
    humb.classList.remove('active');
    navMenu.classList.remove('active');
}

navLink.forEach(n => n.addEventListener('click', closeMenu));

let swiper = new Swiper(".swiper-container",{
   spaceBetween: 50,

   centerSlides: 'true',
   fade: 'true',
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
       320: {
           slidesPerView: 1,
       },
       950: {
           slidesPerView: 1,
       },
       1061: {
           slidesPerView: 3,
       },
   }
 });