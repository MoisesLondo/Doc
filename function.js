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