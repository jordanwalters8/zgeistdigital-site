const sections = document.querySelectorAll("section");

sections.forEach(section => {
  section.style.opacity = 0;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = "opacity 1s ease";
      entry.target.style.opacity = 1;
    }
  });
});

sections.forEach(section => observer.observe(section));
