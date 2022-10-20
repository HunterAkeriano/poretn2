let humb = document.querySelector('.burger');
let navMenu = document.querySelector('.ul-link');




function mobileMenu(){
   let nav = humb.classList.toggle('active');
    navMenu.classList.toggle('active');
    if(nav){
        document.body.style.overflow = 'hidden';
    }if(!nav){
        document.body.style.overflow = 'scroll';
    }
}

humb.addEventListener('click', mobileMenu);

const navLink = document.querySelectorAll('.nav-link');

function closeMenu(){
    humb.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'scroll';
}




navLink.forEach(n => n.addEventListener('click', closeMenu));

let swiper = new Swiper(".swiper1",{
   spaceBetween: 1,

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

// Слайдер на 8 блоков

let swiper2 = new Swiper(".swiper2",{
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
            slidesPerView: 4,
        },
    }
  });
 

  let swiper3 = new Swiper(".swiper3",{
    spaceBetween: 30,
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
            slidesPerView: 2,
        },
        1200:{
            slidesPerView: 3,
        },
        1500:{
            slidesPerView: 4,
        }
        
    }
  });