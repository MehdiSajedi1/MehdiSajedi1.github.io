'use strict';

//- ********************************************************
// PAGE LOAD ANIMATION
//- ********************************************************
const heroText = document.querySelector('.text-intro');

document.addEventListener('DOMContentLoaded', () => {
  heroText.classList.add('attach-animation');
});

//- ********************************************************
// HERO NAME TRANSITION
//- ********************************************************
const nameText = document.querySelector('.name');

nameText.addEventListener('mouseenter', () => {
  nameText.classList.toggle('active');
});

nameText.addEventListener('click', () => {
  nameText.classList.toggle('active');
});

//- ********************************************************
// VIEW PROJECTS BUTTON SMOOTH SCROLL
//- ********************************************************
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

viewProjectsBtn.addEventListener('click', () => {
  const line = document.querySelector('.line');
  const distance = line.getBoundingClientRect().top + window.scrollY;

  scrollToSmoothly(distance, 700);
});

//- ********************************************************
// REVEAL PROJECTS ON SCROLL
//- ********************************************************
const projects = document.querySelectorAll('.project');
projects.forEach((project) => project.classList.add('invisible'));

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    console.log(entry);
    entry.target.classList.remove('invisible');
    observer.unobserve(entry.target);
  });
};

const options = {
  root: null,
  threshold: 0.5,
};

const observer = new IntersectionObserver(callback, options);

projects.forEach((project) => {
  observer.observe(project);
});
