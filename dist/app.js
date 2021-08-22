const heroText = document.querySelector('.text-intro');

heroText.addEventListener('mouseenter', () => {
  heroText.classList.toggle('active');
});

heroText.addEventListener('click', () => {
  heroText.classList.toggle('active');
});

$('#view-projects').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      750
    );
  }
});
