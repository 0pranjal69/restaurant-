document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const navLinks = document.querySelectorAll('.nav-link');

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }

       
    });

    // Add click event listener to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});



  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  
  function showSlide(index) {
      slides.forEach((slide, i) => { 
          slide.classList.remove('active');
          if (i === index) {
              slide.classList.add('active');
          }
      });
  }
  
  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }
  
  function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  }
  
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
  
  setInterval(nextSlide, 3000); 
  



  let index = 1;

  const updateCarousel = () => {
      const slides = document.querySelectorAll('.carousel-item');
      slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) {
              slide.classList.add('active');
          }
      });
      const carouselSlide = document.querySelector('.carousel-slide');
      carouselSlide.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
  };
  
  const NextSlide = () => {
      const slides = document.querySelectorAll('.carousel-item');
      index = (index + 1) % slides.length;
      updateCarousel();
  };
  
  const PrevSlide = () => {
      const slides = document.querySelectorAll('.carousel-item');
      index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
  };
  
  document.querySelector('.car-next').addEventListener('click', NextSlide);
  document.querySelector('.car-prev').addEventListener('click', PrevSlide);
  
  setInterval(NextSlide, 3000); // Auto-slide every 3 seconds
  
  window.onload = updateCarousel;
  





document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentIndex = 0;
    let slideInterval = setInterval(showNextSlide, 3000);

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    const container = document.querySelector('.testimonial-container');
    container.addEventListener('mouseover', function() {
        clearInterval(slideInterval);
    });

    container.addEventListener('mouseout', function() {
        slideInterval = setInterval(showNextSlide, 2000);
    });

    slides[currentIndex].classList.add('active');
});
