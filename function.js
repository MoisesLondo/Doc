let currentIndex = 0;

function getFirstSlideIndex() {
    const slides = document.getElementsByClassName('slide');
    return Array.from(slides).indexOf(slides[0]);
}
function changeSlide() {
    const slides = document.getElementsByClassName('slide');
    if (currentIndex === Array.from(slides).indexOf(slides.firstElementChild)) {
        currentIndex = (currentIndex + 1) % slides.length;
    }
    slides[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = 1;
}

setInterval(changeSlide, 5000);

const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const message = localStorage.getItem("message");
  const fecha = localStorage.getItem("fecha");
  const hora = localStorage.getItem("hora");
document.querySelector("p.name").textContent = name;
document.querySelector("p.email").textContent = email;
document.querySelector("p.phone").textContent = phone;
document.querySelector("p.message").textContent = message;
document.querySelector("p.fecha").textContent = fecha;
document.querySelector("p.hora").textContent = hora;