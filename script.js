/*

JavaScript for Gushwork Assignment
Author: Chethan Nazre S
Features: Sticky header, carousel functionality..

*/

// handling scroll behavior for header visibility
let header = document.getElementById("header");
let lastScrollY = 0;

window.addEventListener("scroll", function () {
let currentScroll = window.scrollY;

if (currentScroll > 100) {
if (currentScroll < lastScrollY) 
    {
header.classList.add("show");
} else {
header.classList.remove("show");
}
}


lastScrollY = currentScroll;
});

// carousel logic
let items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;


function updateCarousel(index) {
items.forEach(item => item.classList.remove("active"));
items[index].classList.add("active");
}


document.getElementById("nextBtn").addEventListener("click", function () {
currentIndex++;
if (currentIndex >= items.length) {
currentIndex = 0;
}

updateCarousel(currentIndex);
});


document.getElementById("prevBtn").addEventListener("click", function () {
currentIndex--;
if (currentIndex < 0) {
currentIndex = items.length - 1;
}

updateCarousel(currentIndex);
});
