const PrimaryHeader=document.querySelector(".primary-header");
const NavToggle=document.querySelector(".mobile-nav-toggle");
const PrimaryNav=document.querySelector(".primary-navigation");

NavToggle.addEventListener('click',()=>{
  PrimaryNav.hasAttribute('data-visible')
  ?NavToggle.setAttribute('aria-expanded',true)
  :NavToggle.setAttribute('aria-expanded',false);
  PrimaryNav.toggleAttribute('data-visible');
  PrimaryHeader.toggleAttribute('data-overlay'); 
});

// window.addEventListener("DOMContentLoaded", function() {
//   const slider = new A11YSlider(document.querySelector('.slider'), {
//     adaptiveHeight: true,
//     dots: false
//   });
// });

window.addEventListener("DOMContentLoaded", function() {
  const slider = new A11YSlider(document.querySelector(".slider"), {
    slidesToShow: 1,
    arrows: true, // arrows enabled 767px and down
    dots: true,
    autoplaySpeed: 2500,
    autoplay: true,
    responsive: {
      768: {
        slidesToShow: 2,
        arrows: false
        
      },
      960: {
        disable: false 
      },
      1280: {
        disable: false,
        slidesToShow: 4,
        dots: true ,// dots enabled 1280px and up
        arrows:true
      }
    }
  });
  
});
