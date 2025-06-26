// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// // navbar fixed 
// window.onscroll = function() {
//   const header = document.querySelector('header');
//   const fixedNav = header.offsetTop;

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add('navbar-fixed');
//   } else {
//     header.classList.remove('navbar-fixed');
//   }
// }

// window.addEventListener('scroll', () => {
//   const header = document.querySelector('header');
//   if (window.scrollY > 50) {
//     header.classList.add('shadow-md', 'bg-white/90');
//     header.classList.remove('bg-white/80');
//   } else {
//     header.classList.remove('shadow-md', 'bg-white/90');
//     header.classList.add('bg-white/80');
//   }
// });

let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll <= 0) {
    header.classList.remove('shadow-md');
    header.style.backdropFilter = 'blur(4px)';
  } else if (currentScroll > lastScroll) {
    // Scroll down
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scroll up
    header.style.transform = 'translateY(0)';
    header.classList.add('shadow-md');
    header.style.backdropFilter = 'blur(8px)';
  }
  
  lastScroll = currentScroll;
});