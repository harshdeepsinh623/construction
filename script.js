document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slidex"); // Selector for slides
    const dots = document.querySelectorAll(".dots a"); // Selector for dots (if you have them)
    let currentIndex = 0;

    // Function to show the current slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach((slide) => {
            slide.style.display = "none";
        });
        // Show the current slide
        slides[index].style.display = "block";
    }

    // Move to the next or previous slide
    function moveSlide(step) {
        currentIndex = (currentIndex + step + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Automatically move to the next slide every 5 seconds
    setInterval(() => moveSlide(1), 5000);

    // Dots click event
    if (dots) {
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                currentIndex = index; // Update current index to clicked dot
                showSlide(currentIndex);
            });
        });
    }

    // Initial display
    showSlide(currentIndex);

    // Function to show alerts for vision, mission, and goals
    function showMore(section) {
        if (section === 'vision') {
            alert("Our vision is to set standards of excellence by leading with integrity and innovation.");
        } else if (section === 'mission') {
            alert("Our mission is to consistently deliver high-quality solutions that inspire customer loyalty.");
        } else if (section === 'goals') {
            alert("Our goal is to expand our reach, continuously innovate, and achieve sustainable growth.");
        }
    }

    // Optional: add event listeners for buttons if you have them
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (prevButton) {
        prevButton.addEventListener("click", () => moveSlide(-1));
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => moveSlide(1));
    }

     window.onload = function() {
            document.body.classList.add('loaded');
        };
});
