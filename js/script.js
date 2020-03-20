window.addEventListener("DOMContentLoaded", () => {
  const navExit = document.querySelector(".nav-exit");
  const navLinks = document.querySelector(".nav-links");
  document.querySelector(".nav-open").addEventListener("click", () => {
    navExit.classList.toggle("nav-active");
    navLinks.classList.toggle("nav-active");
  });
  navExit.addEventListener("click", () => {
    navExit.classList.toggle("nav-active");
    navLinks.classList.toggle("nav-active");
  });
});
