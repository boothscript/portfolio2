// ===== mobile nav =====
window.addEventListener("DOMContentLoaded", () => {
  const navExit = document.querySelector(".nav-exit");
  const navLinks = document.querySelector(".nav-links");
  const navOpen = document.querySelector(".nav-open");
  navOpen.addEventListener("click", () => {
    navExit.classList.toggle("nav-active");
    navLinks.classList.toggle("nav-active");
    navOpen.classList.toggle("nav-active");

    // mouseleave event for desktops
    const hideNavLinks = () => {
      navExit.classList.toggle("nav-active");
      navLinks.classList.toggle("nav-active");
      navOpen.classList.toggle("nav-active");
      // remove eventlistener
      navLinks.removeEventListener("mouseleave", hideNavLinks);
    };
    navLinks.addEventListener("mouseleave", hideNavLinks);
  });
  //  nav exit button for mobile
  navExit.addEventListener("click", () => {
    navExit.classList.toggle("nav-active");
    navLinks.classList.toggle("nav-active");
    navOpen.classList.toggle("nav-active");
  });
});

// ===== desktop nav =====

// animation debounce fn
const debounce = fn => {
  let frame;
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};
// add scroll to dataset
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};
// add scroll event listener
document.addEventListener("scroll", debounce(storeScroll), { passive: true });

// init scroll value
storeScroll();
