// NAV MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// DYNAMIC YEAR
document.getElementById("year").textContent = new Date().getFullYear();
