const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("main-nav");

hamburger.addEventListener("click", function() {
  mainNav.classList.toggle("show");
})
