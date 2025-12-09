const headings = document.querySelectorAll('.statistics__heading');
let currentIndex = 0;

setInterval(() => {
    headings[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % headings.length;
    headings[currentIndex].classList.add('active');

}, 2000);