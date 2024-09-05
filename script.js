document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.querySelector('.page-title');

    pageTitle.addEventListener('mouseenter', () => {
        pageTitle.style.color = '#ffaa00';
    });

    pageTitle.addEventListener('mouseleave', () => {
        pageTitle.style.color = '#fff';
    });
});

let colors = ['#000428', '#004e92', '#1a2980', '#26d0ce', '#ffcc00'];
let currentIndex = 0;

setInterval(() => {
    document.body.style.background = `linear-gradient(to right, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]})`;
    currentIndex = (currentIndex + 1) % colors.length;
}, 5000);
