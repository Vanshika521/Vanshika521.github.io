document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.getElementById("skills-section");
  const progressBars = document.querySelectorAll(".progress");

  // Set up the Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the progress bar when it is in view
          const bar = entry.target;
          const percentage = bar.getAttribute("data-percentage");
          bar.style.width = percentage;
        } else {
          // Reset the progress bar when it goes out of view
          entry.target.style.width = "0%";
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe each progress bar
  progressBars.forEach((bar) => {
    observer.observe(bar);
  });
});
