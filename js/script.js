const resumeSection = document.getElementById('resume-section');
const progressBars = document.querySelectorAll('.bar');

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    progressBars.forEach((bar, index) => {
      const percentage = bar.querySelector('.skill-per').textContent;
      const progress = bar.querySelector('.bar span');
      progress.style.width = `${percentage}%`;
      progress.style.transition = 'width 0.5s ease-in-out';
    });
  }
}, {
  threshold: 0.5,
});

observer.observe(resumeSection);
