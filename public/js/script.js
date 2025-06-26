// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const backToTopButton = document.getElementById('back-to-top');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// klik diluar hamburger untuk tutup menu
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
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

// navbar akan sembunyi ketika di scroll kebawah dan akan tampil ketika di scroll keatas dan fixed
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

// tombol back to top
// Back to Top Button Logic

window.addEventListener('scroll', () => {
  // Tampilkan tombol ketika scroll lebih dari 300px dari atas
  if (window.scrollY > 300) {
    backToTopButton.classList.remove('hidden');
    backToTopButton.classList.add('flex'); // atau 'block' tergantung kebutuhan
  } else {
    backToTopButton.classList.add('hidden');
    backToTopButton.classList.remove('flex');
  }
});

// Smooth scroll ke atas ketika diklik
backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});