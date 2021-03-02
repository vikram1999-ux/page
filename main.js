let ham = document.querySelector(".ham-menu");
let sidebar = document.querySelector(".mobile-sidebar");
let overlay = document.querySelector(".overlay");
ham.addEventListener("click", () => {
  ham.classList.toggle("open");
  sidebar.classList.toggle("open");
  overlay.style.display = "block";
});
overlay.addEventListener("click", () => {
  ham.classList.remove("open");
  sidebar.classList.remove("open");
});
console.log(ham);
