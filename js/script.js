let humb = document.querySelector('.humb');
let navMenu = document.querySelector('.nav-ul');

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

navLink.forEach(n => n.addEventListener('click', closeMenu))