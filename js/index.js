
const menuToggle= document.querySelector('.menuToggle');
const navigation= document.querySelector('.navigation');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
window.addEventListener('scroll', function(){
    const header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

//now, we will fix navigation issue...menu close after clicked any link
function toggleMenu(){
    menuToggle.classList.remove('active');
    navigation.classList.remove('active');
}

// Initialize Swiper 
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })