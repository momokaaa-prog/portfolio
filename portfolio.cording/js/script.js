$(function () {
    $(".hamburger_menu").click(function () {
        $(".hamburger_menu").toggleClass("open");
        $(".header_nav-sp").fadeToggle();
    });
});

$(function () {
    $(window).on("scroll", function () {
        const sliderHeight = $(".header").height();
        if (sliderHeight - 30 < $(this).scrollTop()) {
        $(".header").addClass("headerColorScroll");
        } else {
        $(".header").removeClass("headerColorScroll");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const text = "SCROLL DOWN ";
    const repeatedText = text.repeat(2);
    const circleText = document.querySelector(".circle-text_01");
    const totalChars = repeatedText.length;
    const anglePerChar = 360 / totalChars;

    for (let i = 0; i < totalChars; i++) {
        const span = document.createElement("span");
        span.textContent = repeatedText[i];
        span.style.transform = `rotate(${i * anglePerChar}deg)`;
        circleText.appendChild(span);
    }
});


window.addEventListener('scroll', function() {
    const textElements = document.querySelectorAll('.fade');

    textElements.forEach((element, index) => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.1;

        if (position < screenPosition) {
        element.style.setProperty('--delay', index);
        element.classList.add('visible');
        }
    });
});


window.addEventListener('load', function() {
    const textElements = document.querySelectorAll('.fade_under');

    textElements.forEach((element) => {
        element.classList.add('visible');
    });
});


window.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelector(".stars");

    const createStar = () => {
    const starEl = document.createElement("span");
    starEl.className = "star";
    const minSize = 3; 
    const maxSize = 4;
    const size = Math.random() * (maxSize - minSize) + minSize;
    starEl.style.width = `${size}px`;
    starEl.style.height = `${size}px`;
    starEl.style.left = `${Math.random() * 100}%`;
    starEl.style.top = `${Math.random() * 100}%`;
    starEl.style.animationDelay = `${Math.random() * 8}s`;
    stars.appendChild(starEl);
    };

    for (let i = 0; i <= 30; i++) {
    createStar();
    }
});





