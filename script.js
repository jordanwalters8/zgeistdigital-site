const revealItems = document.querySelectorAll(".hero, .services, .contact");

revealItems.forEach((item) => item.style.opacity = 0);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = "opacity 1s ease";
      entry.target.style.opacity = 1;
    }
  });
});

revealItems.forEach(item => observer.observe(item));
