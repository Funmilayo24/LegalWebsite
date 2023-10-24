$(document).ready(function() {
    var sections = $('.scroll-animate-section .contact-part');
    var sectionWrapper = $('.scroll-animate-section');

    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        var sectionTop = sectionWrapper.offset().top - $(window).height();

        if (scrollTop > sectionTop) {
            sectionWrapper.addClass('active');
            sections.each(function(index) {
                var delay = 150 * index; // Add delay for each section
                setTimeout(function() {
                    $(this).addClass('animate');
                }.bind(this), delay);
            });
        }
    });

    // JavaScript to create the manual slideshow

const slides = document.querySelectorAll('.review-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

showSlide(currentSlide);

document.querySelector('.prev-slide').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

document.querySelector('.next-slide').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

});
