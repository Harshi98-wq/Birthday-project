document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let nextButtons = document.querySelectorAll('.nextSlideBtn');
    let cover = document.getElementById('cover');
    let slidesContainer = document.getElementById('slidesContainer');
    let startBtn = document.getElementById('startBtn');
    let currentSlide = 0;

    // Hide Cover and Show Slides on Button Click
    startBtn.addEventListener('click', function () {
        cover.style.display = 'none';
        slidesContainer.style.display = 'block';
        showSlide(0);
    });

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // Remove previous animation
            if (i === index) {
                setTimeout(() => {
                    slide.classList.add('active'); // Add animation
                }, 100); 
            }
        });
    }

    nextButtons.forEach((button) => {
        button.addEventListener('click', function () {
            currentSlide = (currentSlide + 1) % slides.length; // Loop back to first slide
            showSlide(currentSlide);
        });
    });

    showSlide(0);
});

// Continuous Confetti Effect
function createConfetti() {
    setInterval(() => {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = Math.random() * 1 + 1 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }, 300);
}

function getRandomColor() {
    let colors = ['crimson', 'deeppink', 'aqua', 'greenyellow', 'red', 'lightcoral', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener('DOMContentLoaded', createConfetti);
