const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const reveals = document.querySelectorAll(".reveal");
const glow = document.querySelector(".cursor-glow");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

window.addEventListener("mousemove", (e) => {
  if (!glow) return;
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("show");
    }
  });
});