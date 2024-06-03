//form popup handling
document.getElementById('contact-button').addEventListener('click', function() {
    document.getElementById('popup-form').style.display = 'flex';
});

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('popup-form').style.display = 'none';
});

//handling form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: data
    }).then(() => {
        alert('Thank you for contacting us!');
        document.getElementById('popup-form').style.display = 'none';
    }).catch(() => {
        alert('There was an error submitting the form.');
    });
});

//slides

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

function showSlide(slideIndex) {
    if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = slideIndex;
    }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-100 * currentSlide}%)`;
    });
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

//auto sliding every 5sec
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);


//changing images according to column hover in what we do sec
document.querySelectorAll('.detail').forEach(detail => {
    detail.addEventListener('mouseenter', function() {
        const imageSrc = this.getAttribute('data-image');
        document.getElementById('project-img').src = imageSrc;
    });
    detail.addEventListener('mouseleave', function() {
        document.getElementById('project-img').src = 'assets/slide-img1.jpg';
    });
});









