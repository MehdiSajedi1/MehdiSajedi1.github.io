'use strict';

const nameText = document.querySelector('.name');
const heroText = document.querySelector('.text-intro');

nameText.addEventListener('mouseenter', () => {
  heroText.classList.toggle('active');
});

nameText.addEventListener('click', () => {
  heroText.classList.toggle('active');
});

function scrollToSmoothly(pos, time) {
  let currentPos = window.pageYOffset;
  let start = null;
  if (time == null) time = 500;
  (pos = +pos), (time = +time);
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    let progress = currentTime - start;
    if (currentPos < pos) {
      window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
    } else {
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
    }
    if (progress < time) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, pos);
    }
  });
}

const viewProjectsBtn = document.querySelector('#view-projects');

viewProjectsBtn.addEventListener('click', (e) => {
  const line = document.querySelector('.line');
  const distance = line.getBoundingClientRect().top + window.scrollY;

  scrollToSmoothly(distance, 700);
});
