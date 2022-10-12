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

navLink.forEach(n => n.addEventListener('click', closeMenu));

// slider
const slider = document.querySelector('.slider-container');

let mySwiper;
new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 50,
    slideClass: 'card',
})
function mobileSlider(){
    if(window.innerWidth <= 800  && slider.dataset.mobile == 'false'){
        mySwiper = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            slideClass: 'card',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }
        });

        slider.dataset.mobile = 'true';
    }
    if(window.innerWidth > 800){
        slider.dataset.mobile = 'false';
        if(slider.classList.contains('swiper-container-initialized')){
            mySwiper.destroy();
        }
    }
}
mobileSlider();
window.addEventListener('resize', () =>{
    mobileSlider();
})