// Toggle Mobile Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

