const heroText = document.querySelector('.text-intro');

heroText.addEventListener('mouseenter', (e) => {
  heroText.classList.toggle('active');
});

heroText.addEventListener('click', (e) => {
  heroText.classList.toggle('active');
});
