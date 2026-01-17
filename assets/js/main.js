/* ======================================
   Smooth Scroll for Internal Links
====================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ======================================
   Section Fade-in on Scroll
====================================== */
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => observer.observe(section));

/* ======================================
   Scroll Progress Bar
====================================== */
const progressBar = document.getElementById("progress-bar");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / height) * 100;
    progressBar.style.width = scrolled + "%";
  });
}

/* ======================================
   Dark Mode Toggle
====================================== */
function toggleTheme() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("themeBtn");
  btn.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
}

