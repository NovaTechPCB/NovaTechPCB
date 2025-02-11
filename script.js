// document.addEventListener("DOMContentLoaded", () => {
//   const slides = document.querySelector(".slides");
//   const slideInterval = 5000; // 5 seconds per slide
//   const totalSlides = slides.children.length;

//   let currentSlide = 0;

//   function moveToNextSlide() {
//     currentSlide = (currentSlide + 1) % totalSlides;
//     slides.style.transition = "transform 1s ease";
//     slides.style.transform = `translateX(-${currentSlide * 100}%)`;
//   }

//   setInterval(moveToNextSlide, slideInterval);

//   // Reset transition after each slide (to enable looping effect)
//   slides.addEventListener("transitionend", () => {
//     if (currentSlide === totalSlides - 1) {
//       slides.style.transition = "none"; // Disable transition
//       slides.style.transform = "translateX(0)"; // Reset to first slide
//       currentSlide = 0;
//     }
//   });
// });

let currentIndex = 0;

    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    function updateCarousel() {
        const carouselInner = document.querySelector('.carousel-inner');
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }
  // Dropdown menu functionality for mobile view
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        const menu = dropdown.querySelector(".dropdown-menu");
        const isVisible = menu.style.display === "block";

        // Close all dropdowns
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          menu.style.display = "none";
        });

        // Toggle the clicked dropdown
        menu.style.display = isVisible ? "none" : "block";
      }
    });
  });

