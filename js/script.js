const toggleButton = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });


  const slider = document.querySelector('.slider');
  const nextSlide = document.getElementById('next-slide');
  const prevSlide = document.getElementById('prev-slide');
  let currentIndex = 0;
  const totalSlides = slider.children.length;

  nextSlide.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  prevSlide.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  });